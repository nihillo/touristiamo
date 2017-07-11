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
    class CityModel extends Model {
        
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
         * @var Integer
         */
        public $countryId;


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
                $st = $this->connection->prepare('select id, name_en, name_es, name_it, countryId from city where id = :id');
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
                $this->countryId = $rs->countryId;
                $this->name_en = $rs->name_en;
                $this->name_es = $rs->name_es;
                $this->name_it = $rs->name_it;
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
                $st = $this->connection->prepare('insert into city (id, name_en, name_es, name_it, countryId) values (:id, :name_en, :name_es, :name_it, :countryId)');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
                $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_INT);
                $st->bindParam(':name_es', $this->name_es, \PDO::PARAM_INT);
                $st->bindParam(':name_it', $this->name_it, \PDO::PARAM_INT);
                $st->bindParam(':countryId', $this->countryId, \PDO::PARAM_INT);
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
        public function update()
        {
            try
            {
                $st = $this->connection->prepare('update city set '
                        . 'name_en = :name_en, '
                        . 'name_es = :name_es, '
                        . 'name_it = :name_it, '
                        . 'countryId = :countryId '
                        . 'where id = :id');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
                $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_INT);
                $st->bindParam(':name_es', $this->name_es, \PDO::PARAM_INT);
                $st->bindParam(':name_it', $this->name_it, \PDO::PARAM_INT);
                $st->bindParam(':countryId', $this->countryId, \PDO::PARAM_INT);
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
         * Delete model from data base
         * @return boolean
         * @throws BDException
         */
        public function delete()
        {
            try
            {
                $st = $this->connection->prepare('DELETE FROM city where id = :id');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
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
         * Get all cities from the data base.
         * @return \PDOStatement
         * @throws BDException
         */
        public function getAll()
        {
            try
            {
                $st = $this->connection->prepare('select * from city');
                
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
         * Get all cities by country id
         * @param integer $countryId
         * @return \PDOStatement
         * @throws BDException
         */
        public function getAllByCountryId($countryId)
        {
            try
            {
                $st = $this->connection->prepare('select * from city where countryId = :countryId');
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
         * Get city by id
         * @param integer $id
         * @return \PDOStatement
         * @throws BDException
         */
        public function getById($id)
        {
            try
            {
                $st = $this->connection->prepare('select * from city where id = :id');
                $st->bindParam(':id', $id, \PDO::PARAM_INT);
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

    }