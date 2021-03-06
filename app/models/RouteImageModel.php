<?php

    // namespace touristiamo\models;
    
    // use touristiamo\Model as Model;
    // use touristiamo\error\HttpError as HttpError;
    // use touristiamo\exception\BDException as BDException;
    
    // /**
    //  * The class has protected or private variables , so you can protect them. 
    //  * We will use the get methods to obtain the value and set methods to change the value.
    //  * However, our variables are public, because we use json. 
    //  * It will get the variable. If the variable is public, it won't get it.
    //  */
    // class RouteImageModel extends Model
    // {
    //     /**
    //      *
    //      * @var integer
    //      */
    //     public $id;
        
    //     /**
    //      *
    //      * @var string
    //      */
    //     public $path;

    //     /**
    //      * 
    //      * @param integer $id
    //      */
    //     public function __construct( $id = null)
    //     {
    //         parent::__construct();	
    //         if ($id != null) 
    //         {
    //             $st = $this->connection->prepare('select id, path from image where id = :id');
    //             $st->bindParam(':id', $id, \PDO::PARAM_INT);
    //             if (!$st->execute()) 
    //             {
    //                 throw new BDException($st->errorInfo());
    //             }
    //             if ( !($rs = $st->fetch(\PDO::FETCH_OBJ)))
    //             {
    //                 throw new BDException('Not exist any '. get_class($this). ' with id '. $id);
    //             }

    //             //Insert value
    //             $this->id = $rs->id;
    //             $this->path = $rs->path;
    //         }
    //     }

    //     /**
    //      * Save the model into database
    //      * @return boolean May be true or throw HttpError
    //      */
    //     public function save() 
    //     {
    //         try
    //         {
    //             $st = $this->connection->prepare('insert into image (id, path) values (:id, :path)');
    //             $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
    //             $st->bindParam(':path', $this->path, \PDO::PARAM_STR);
    //             if (!$st->execute()) 
    //             {
    //                 throw new BDException($st->errorInfo());
    //             }
    //             return true;
    //         } catch(\PDOException $e)
    //         {
    //             HttpError::send(400, $e->getMessage());
    //         }
    //     }

    //     /**
    //      * Update model into data base
    //      * @return boolean
    //      */
    //     public function update()
    //     {
    //         try
    //         {
    //             $st = $this->connection->prepare('UPDATE image SET path = :path '
    //                     . 'where id = :id');
    //             $st->bindParam(':path', $this->path, \PDO::PARAM_STR);
    //             $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
    //             if (!$st->execute()) 
    //             {
    //                 throw new BDException($st->errorInfo());
    //             }
    //             return true;
    //         }catch(\PDOException $e)
    //         {
    //             HttpError::send(400, $e->getMessage());
    //         }
    //     }

    //     /**
    //      * Delete this model from the data base
    //      * @return boolean Return true if it was deleted. If there is an error it
    //      * trhows an BDException.
    //      * @throws BDException
    //      */
    //     public function delete()
    //     {
    //         try
    //         {
    //             $st = $this->connection->prepare('delete FROM image where id = :id');
    //             $st->bindParam(':id', $this->id, \PDO::PARAM_INT);
    //             if (!$st->execute()) 
    //             {
    //                 throw new BDException($st->errorInfo());
    //             }
    //             return true;
    //         }catch(\PDOException $e)
    //         {
    //             HttpError::send(400, $e->getMessage());
    //         }
    //     }	
        
        
    //     /**
    //      * 
    //      * @param integer $routeId
    //      * @return \PDOStatement
    //      * @throws BDException
    //      */
    //     public function getAllByRouteId($routeId)
    //     {
    //         try
    //         {
    //             $st = $this->connection->prepare('select id, path from route_image join image on route_image.imageId = image.id where route_image.routeId = :routeId');
    //             $st->bindParam(':routeId', $routeId, \PDO::PARAM_INT);
    //             if (!$st->execute()) 
    //             {
    //                 throw new BDException($st->errorInfo());
    //             }
    //             return $st->fetchAll(\PDO::FETCH_OBJ);
    //         } catch (\PDOException $e) 
    //         {
    //             HttpError::send(400, $e->getMessage());
    //         }
    //     }
        
        
    //     /**
    //      * Delete all images from a route.
    //      * @param integer $routeId
    //      * @return boolean
    //      * @throws BDException
    //      */
    //     public function deleteAllByRouteId($routeId)
    //     {
    //         try 
    //         {
    //             $st = $this->connection->prepare('delete from image where routeId = :routeId');
    //             $st->bindParam(':routeId', $routeId, \PDO::PARAM_INT);
    //             if (!$st->execute()) 
    //             {
    //                 throw new BDException($st->errorInfo());
    //             }
    //             return true;
    //         } catch (\PDOException $e) 
    //         {
    //             HttpError::send(400, $e->getMessage());
    //         }
    //     }
    // }