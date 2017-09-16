<?php

    namespace touristiamo\models;
    
    use touristiamo\error\HttpError as HttpError;
    use touristiamo\Model as Model;
    use touristiamo\exception\BDException as BDException;

    /**
     *  The class has protected or private variables , so you can protect them. 
     *  We will use the get methods to obtain the value and set methods to change the value.  
     *  However, our variables are public, because we use json. It will get the variable. 
     *  If the variable is public, it won't get it.
     */
    class PointModel extends Model {
        
        /**
         *
         * @var Integer
         */
        public $id;
        
        /**
         *
         * @var String
         */
        public $name_en;

        /**
         *
         * @var String
         */
        public $name_es;

        /**
         *
         * @var String
         */
        public $name_it;
        
        /**
         *
         * @var String
         */
        public $description_en;

        /**
         *
         * @var String
         */
        public $description_es;

        /**
         *
         * @var String
         */
        public $description_it;

        /**
         *
         * @var String
         */
        public $type;

        /**
         *
         * @var Float
         */
        public $lat;

        /**
         *
         * @var Float
         */
        public $lng;

        /**
         *
         * @var Integer
         */
        public $pt_order;

        /**
         *
         * @var Integer
         */
        public $routeId;


        /**
         * 
         * @param integer $id
         * @return boolean
         * @throws BDException
         */
        public function __construct($id = null)
        {
            parent::__construct();
            if ($id != null)
            {
                $st = $this->connection->prepare('select * from point join point_route on point.id = point_route.rotueId where id = :id');
                $st->bindParam(':id', $id, \PDO::PARAM_INT);
                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }
                if ( !($rs = $st->fetch(\PDO::FETCH_OBJ)))
                {
                    throw new BDException('No '. get_class($this). ' exists with id '. $id);
                }

                // Load values into model
                $this->id = $rs->id;
                $this->routeId = $rs->routeId;
                $this->pt_order = $rs->pt_order;
                $this->name_en = $rs->name_en;
                $this->name_es = $rs->name_es;
                $this->name_it = $rs->name_it;
                $this->description_en = $rs->description_en;
                $this->description_es = $rs->description_es;
                $this->description_it = $rs->description_it;
                $this->type = $rs->type;
                $this->lat = $rs->lat;
                $this->lng = $rs->lng;
            }

        }


        /**
         * Save model into data base
         * @return boolean
         * @throws BDException
         */
        public function save()
        {
            try
            {
                $st = $this->connection->prepare('insert into point (id, name_en, name_es, name_it, description_en, description_es, description_it, type, lat, lng) values (:id, :name_en, :name_es, :name_it, :description_en, :description_es, :description_it, :type, :lat, :lng)');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
                $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_INT);
                $st->bindParam(':name_es', $this->name_es, \PDO::PARAM_INT);
                $st->bindParam(':name_it', $this->name_it, \PDO::PARAM_INT);
                $st->bindParam(':description_en', $this->description_en, \PDO::PARAM_INT);
                $st->bindParam(':description_es', $this->description_es, \PDO::PARAM_INT);
                $st->bindParam(':description_it', $this->description_it, \PDO::PARAM_INT);
                $st->bindParam(':type', $this->type, \PDO::PARAM_INT);
                $st->bindParam(':lat', $this->lat, \PDO::PARAM_INT);
                $st->bindParam(':lng', $this->lng, \PDO::PARAM_INT);

                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }

                $st = $this->connection->prepare('select id from point where name_en = :name_en');
                $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_INT);
                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }
                $this->id = $st->fetch(\PDO::FETCH_OBJ)->id;

                $st = $this->connection->prepare('insert into point_route (pointId, routeId, pt_order) values (:id, :routeId, :pt_order)');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
                $st->bindParam(':routeId', $this->routeId, \PDO::PARAM_INT);
                $st->bindParam(':pt_order', $this->pt_order, \PDO::PARAM_INT);

                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }

                return true;
            } catch(\PDOException $e)
            {
                HttpError::send(400, $e->getMessage());
            }
        }

        /**
         * Update model from data base
         * @return boolean
         * @throws BDException
         */
        // public function update()
        // {
        //     try
        //     {
        //         $st = $this->connection->prepare('update city set '
        //                 . 'name_en = :name_en, '
        //                 . 'name_es = :name_es, '
        //                 . 'name_it = :name_it, '
        //                 . 'countryId = :countryId '
        //                 . 'where id = :id');
        //         $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
        //         $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_INT);
        //         $st->bindParam(':name_es', $this->name_es, \PDO::PARAM_INT);
        //         $st->bindParam(':name_it', $this->name_it, \PDO::PARAM_INT);
        //         $st->bindParam(':countryId', $this->countryId, \PDO::PARAM_INT);
        //         if (!$st->execute()) 
        //         {
        //             throw new BDException($st->errorInfo());
        //         }
        //         return true;
        //     }catch(\PDOException $e)
        //     {
        //         HttpError::send(400, $e->getMessage());
        //     }
        // }


        // /**
        //  * Delete model from data base
        //  * @return boolean
        //  * @throws BDException
        //  */
        // public function delete()
        // {
        //     try
        //     {
        //         $st = $this->connection->prepare('DELETE FROM city where id = :id');
        //         $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
        //         if (!$st->execute())
        //         {
        //             throw new BDException($st->errorInfo());
        //         }
        //         return true;
        //     }catch(\PDOException $e)
        //     {
        //         HttpError::send(400, $e->getMessage());
        //     }
        // }

        // /**
        //  * Get all cities from the data base.
        //  * @return \PDOStatement
        //  * @throws BDException
        //  */
        // public function getAll()
        // {
        //     try
        //     {
        //         $st = $this->connection->prepare('select * from city');
                
        //         if (!$st->execute())
        //         {
        //             throw new BDException($st->errorInfo());
        //         }


        //         return $st->fetchAll(\PDO::FETCH_OBJ);
        //     } catch (\PDOException $e) 
        //     {
        //         HttpError::send(400, $e->getMessage());
        //     }
        // }


        // /**
        //  * Get all points by route id
        //  * @param integer $routeId
        //  * @return \PDOStatement
        //  * @throws BDException
        //  */
        public function getAllByRouteId($routeId)
        {
            try
            {
                $st = $this->connection->prepare('select * from point_route join point on point_route.pointId = point.id where routeId = :routeId');
                $st->bindParam(':routeId', $routeId, \PDO::PARAM_INT);
                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }
                return $st->fetchAll(\PDO::FETCH_OBJ);
            } catch (\PDOException $e)
            {
                HttpError::send(400, $e->getMessage());
            }
        }

    }