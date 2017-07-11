<?php

    namespace touristiamo\models;
    
    use touristiamo\Model as Model;
    use touristiamo\error\HttpError as HttpError;
    use touristiamo\exception\BDException as BDException;

    /**
     * The class has protected or private variables , so you can protect them. 
     * We will use the get methods to obtain the value and set methods to change the value. 
     * However, our variables are public, because we use json. 
     * It will get the variable. If the variable is public, it won't get it.
     */
    class CountryModel extends Model
    {
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
         * Create the model in memory with the data from the data base.
         * @param integer $id
         * @throws BDException
         */
        public function __construct($id = null)
        {
            parent::__construct();	

            if ($id != null) 
            {
                $st = $this->connection->prepare('select id, name_en, name_es, name_it from country where id = :id');
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
                $this->name_en = $rs->name_en;
                $this->name_es = $rs->name_es;
                $this->name_it = $rs->name_it;
            }
        }

        /**
         * Save model into data base.
         * @return boolean Return true if it was saved successfuly. On the other hand
         * it throws an BDException or HttpError.
         * @throws BDException
         */
        public function save() 
        {
            try
            {
                $st = $this->connection->prepare('insert into country (id, name_en, name_es, name_it) values (:id, :name_en, :name_es, :name_it)');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
                $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_INT);
                $st->bindParam(':name_es', $this->name_es, \PDO::PARAM_INT);
                $st->bindParam(':name_it', $this->name_it, \PDO::PARAM_INT);
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
         * Update the model into data base.
         * @return boolean
         * @throws BDException
         */
        public function update(){

            try 
            {
                $st = $this->connection->prepare('update country set '
                        . 'name_en = :name_en, '
                        . 'name_es = :name_es, '
                        . 'name_it = :name_it '
                        . 'where id = :id');
                $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
                $st->bindParam(':name_en', $this->name_en, \PDO::PARAM_INT);
                $st->bindParam(':name_es', $this->name_es, \PDO::PARAM_INT);
                $st->bindParam(':name_it', $this->name_it, \PDO::PARAM_INT);
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
         * Delete the model from the data base.
         * @return boolean
         * @throws BDException
         */
        public function delete()
        {
            try
            {
                $st = $this->connection->prepare('DELETE FROM country where id = :id');
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
         * Get all countries from the data base.
         * @return boolean
         * @throws BDException
         */
        public function getAll()
        {
            try
            {
                $st = $this->connection->prepare('select * from country');
                if (!$st->execute()) 
                {
                    throw new BDException($st->errorInfo());
                }
                return $st->fetchAll(\PDO::FETCH_OBJ);
            }catch(\PDOException $e)
            {
                HttpError::send(400, $e->getMessage());
            }
        }
    }