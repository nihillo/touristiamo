<?php

    namespace touristiamo\models;

    use touristiamo\Model as Model;
    use touristiamo\error\HttpError as HttpError;
    use touristiamo\exception\BDException as BDException;

    /**
     * The class has protected or private variables , so you can protect them.
     * We will use the get methods to obtain the value and set methods to change the value.
     * However, our variables are public, because we use json. It will get the variable.
     * If the variable is public, it won't get it.
     */
    class RouteModel extends Model
    {
        /**
         *
         * @var integer
         */
        public $id;

        /**
         *
         * @var boolean
         */
        public $accesible;

        /**
         *
         * @var boolean
         */
        public $walkable;

        /**
         *
         * @var boolean
         */
        public $bikeable;

        /**
         *
         * @var string
         */
        public $name_en;

        /**
         *
         * @var string
         */
        public $name_es;

        /**
         *
         * @var string
         */
        public $name_it;

        /**
         *
         * @var string
         */
        public $image;

        /**
         *
         * @var string
         */
        public $description_en;

        /**
         *
         * @var string
         */
        public $description_es;

        /**
         *
         * @var string
         */
        public $description_it;

        /**
         *
         * @var string
         */
        public $slogan_en;

        /**
         *
         * @var string
         */
        public $slogan_es;

        /**
         *
         * @var string
         */
        public $slogan_it;

        /**
         *
         * @var integer
         */
        public $cityId;

        /**
         *
         * @var integer
         */
        public $userId;

        /**
         * Construct a new Model with the data from the data base if pass id.
         * @param integer $id
         * @throws BDException
         */
        public function __construct( $id = null)
        {
            parent::__construct();
            if ($id != null)
            {
                $st = $this->connection->prepare('select id, accesible, name_en, name_es, name_it, image, description_en, description_es, description_it, '
                        . 'slogan_en, slogan_es, slogan_it, cityId, userId, walkable, bikeable from route where id = :id');
                $st->bindParam(':id', $id, \PDO::PARAM_INT);
                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }
                if ( !($rs = $st->fetch(\PDO::FETCH_OBJ)))
                {
                    throw new BDException('Not exist any '. get_class($this). ' with id '. $id);
                }

                //Insert value
                $this->id = $rs->id;
                $this->accesible = $rs->accesible;
                $this->walkable = $rs->walkable;
                $this->bikeable = $rs->bikeable;
                $this->name_en = $rs->name_en;
                $this->name_es = $rs->name_es;
                $this->name_it = $rs->name_it;
                $this->image = $rs->image;
                $this->description_en = $rs->description_en;
                $this->description_es = $rs->description_es;
                $this->description_it = $rs->description_it;
                $this->slogan_en = $rs->slogan_en;
                $this->slogan_es = $rs->slogan_es;
                $this->slogan_it = $rs->slogan_it;
                $this->cityId = $rs->cityId;
                $this->userId = $rs->userId;
            }
        }

        /**
         * Save into the data base the current values in this object.
         * @return boolean
         * @throws BDException
         */
        public function save()
        {
            try
            {
                $st = $this->connection->prepare('insert into route '.
                    '(id, accesible, name_en, name_es, name_it, image, description_en, description_es, description_it, slogan_en, slogan_es, slogan_it, cityId, userId, walkable, bikeable) '.
                    ' values (:id, :accesible, :name_en, :name_es, :name_it, :image, :description_en, :description_es, :description_it, :slogan_en, :slogan_es, :slogan_it, :cityId, :userId, :walkable, :bikeable)');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
                $st->bindParam(':accesible', $this->accesible, \PDO::PARAM_BOOL);
                $st->bindParam(':walkable', $this->walkable, \PDO::PARAM_BOOL);
                $st->bindParam(':bikeable', $this->bikeable, \PDO::PARAM_BOOL);
                $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_STR);
                $st->bindParam(':name_es', $this->name_es, \PDO::PARAM_STR);
                $st->bindParam(':name_it', $this->name_it, \PDO::PARAM_STR);
                $st->bindParam(':image', $this->image, \PDO::PARAM_STR);
                $st->bindParam(':description_en', $this->description_en, \PDO::PARAM_STR);
                $st->bindParam(':description_es', $this->description_es, \PDO::PARAM_STR);
                $st->bindParam(':description_it', $this->description_it, \PDO::PARAM_STR);
                $st->bindParam(':slogan_en', $this->slogan_en, \PDO::PARAM_STR);
                $st->bindParam(':slogan_es', $this->slogan_es, \PDO::PARAM_STR);
                $st->bindParam(':slogan_it', $this->slogan_it, \PDO::PARAM_STR);
                $st->bindParam(':cityId', $this->cityId, \PDO::PARAM_INT);
                $st->bindParam(':userId', $this->userId, \PDO::PARAM_INT);
                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }
                return true;
            }catch(\PDOException $e)
            {
                HttpError::send(400, $e->getMessage());
            }
        }

        /**
         * Update values from the data base with the current values in this object
         * @return boolean
         * @throws BDException
         */
        public function update()
        {
            try
            {
                // id, accesible, name, description, slogan, cityId, userId
                $st = $this->connection->prepare('UPDATE route SET id = :id ,'
                        . 'name_en = :name_en, name_es = :name_es, name_it = :name_it, image = :image, description_en = :description_en, description_es = :description_es, description_it = :description_it, slogan_en = :slogan_en, slogan_es = :slogan_es, slogan_it = :slogan_it, '
                        . 'cityId = :cityId, userId = :userId, accesible = :accesible, walkable = :walkable, bikeable = :bikeable where id = :id');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
                $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_STR);
                $st->bindParam(':name_es', $this->name_es, \PDO::PARAM_STR);
                $st->bindParam(':name_it', $this->name_it, \PDO::PARAM_STR);
                $st->bindParam(':image', $this->image, \PDO::PARAM_STR);
                $st->bindParam(':description_en', $this->description_en, \PDO::PARAM_STR);
                $st->bindParam(':description_es', $this->description_es, \PDO::PARAM_STR);
                $st->bindParam(':description_it', $this->description_it, \PDO::PARAM_STR);
                $st->bindParam(':slogan_en', $this->slogan_en, \PDO::PARAM_STR);
                $st->bindParam(':slogan_es', $this->slogan_es, \PDO::PARAM_STR);
                $st->bindParam(':slogan_it', $this->slogan_it, \PDO::PARAM_STR);
                $st->bindParam(':cityId', $this->cityId, \PDO::PARAM_INT);
                $st->bindParam(':userId', $this->userId, \PDO::PARAM_INT);
                $st->bindParam(':accesible', $this->accesible, \PDO::PARAM_STR);
                $st->bindParam(':walkable', $this->walkable, \PDO::PARAM_STR);
                $st->bindParam(':bikeable', $this->bikeable, \PDO::PARAM_STR);
                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }
                return true;
            }catch(\PDOException $e)
            {
                HttpError::send(400, $e->getMessage());
            }
        }


        /**
         * Delete route from database
         * @return boolean
         * @throws BDException
         */
        public function delete()
        {
            try
            {
                $st = $this->connection->prepare('delete from route where id = :id');
                $st->bindParam(':id', $this->id);
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
         * Return all routes from the data base.
         * @return \ArrayIterator
         * @throws BDException
         */
        public function getAll()
        {
            try
            {
                $st = $this->connection->prepare('select * from route');
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

        /**
         * Return route by id.
         * @param integer $id
         * @return \ArrayIterator
         * @throws BDException
         */
        public function getById($id)
        {
            try
            {
                $st = $this->connection->prepare('select * from route where route.id = :id');
                $st->bindParam(':id', $id, \PDO::PARAM_INT);
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

        /**
         * Return route by english name.
         * @param string $name_en
         * @return \ArrayIterator
         * @throws BDException
         */
        public function getByName($name_en)
        {
            try
            {
                $st = $this->connection->prepare('select * from route where route.name_en = :name_en');
                $st->bindParam(':name_en', $name_en, \PDO::PARAM_INT);
                if (!$st->execute())
                {
                    throw new BDException($st->errorInfo());
                }

                return $st->fetch(\PDO::FETCH_OBJ);
            } catch (\PDOException $e)
            {
                HttpError::send(400, $e->getMessage());
            }
        }



        /**
         * Return all routes from the data base by country id.
         * @return \ArrayIterator
         * @throws BDException
         */
        public function getAllByCountry($countryId)
        {
            try
            {
                $st = $this->connection->prepare('select route.id, route.name_en, route.name_es, route.name_it, route.image, '
                    . 'route.slogan_en,route.slogan_es,route.slogan_it, route.description_en, route.description_es, route.description_it, '
                    . 'route.accesible, route.walkable, route.bikeable, route.cityId, route.userId from route '
                    . 'inner join city on route.cityId = city.id '
                    . 'inner join country on city.countryId = country.id '
                    . 'where country.id = :countryId');
                $st->bindParam(':countryId', $countryId, \PDO::PARAM_INT);
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

        /**
         * Return all routes from the data base by city id.
         * @return \ArrayIterator
         * @throws BDException
         */
        public function getAllByCity($cityId)
        {
            try
            {
                $st = $this->connection->prepare('select * from route '
                    . 'where cityId = :cityId');
                $st->bindParam(':cityId', $cityId, \PDO::PARAM_INT);
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