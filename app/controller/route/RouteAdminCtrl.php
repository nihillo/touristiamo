<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace touristiamo\controller\route;

use touristiamo\error\HttpError as HttpError;
use touristiamo\models\RouteModel as RouteModel;
use touristiamo\models\PointModel as PointModel;
use touristiamo\View as Json;
use touristiamo\exception\BDException as BDException;
use touristiamo\models\CityModel as CityModel;
use touristiamo\models\PictureModel as PictureModel;
use touristiamo\models\CommentModel as CommentModel;
use touristiamo\helper\UserHelper as UserHelper;
use touristiamo\helper\TokenHelper as TokenHelper;

/**
 * This class is used to manage routes
 *
 * @author I.E.S Francisco Ayala
 */
class RouteAdminCtrl
{
    /**
     * 
     * @param \ArrayIterator $publicToken
     * @param \ArrayIterator $args
     * @return Json
     */
    public static function create($publicToken, $args)
    {
        try 
        {
            $userModel = TokenHelper::checkSign($publicToken);

            if (!(UserHelper::isAdmin($userModel->id)) && !(UserHelper::isTouristiamo($userModel->id)) )
            {
                HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to create routes");
            }

            if (
                   empty($args['name_en'])
                || empty($args['name_es'])
                || empty($args['name_it'])
                // || empty($args['slogan_en'])
                // || empty($args['slogan_es'])
                // || empty($args['slogan_it'])
                // || empty($args['description_en'])
                // || empty($args['description_es'])
                // || empty($args['description_it'])
                || empty($args['accesible'])
                || empty($args['walkable'])
                || empty($args['bikeable'])
                || empty($args['cityId']) )
            {
                HttpError::send(400, 'route-missingInfo', "You must fill name, slogan, description, accesible and city id");
            }
            $cityModel = new CityModel($args['cityId']);
            if (($cityModel->id != ($args['cityId'])) )
            {
                HttpError::send(400, 'route-idError', "The city id is incorrect");
            }
            $routeModel = new RouteModel();
            $routeModel->name_en = trim($args['name_en']);
            $routeModel->name_es = trim($args['name_es']);
            $routeModel->name_it = trim($args['name_it']);
            $routeModel->image = trim($args['image']);
            $routeModel->slogan_en = trim($args['slogan_en']);
            $routeModel->slogan_es = trim($args['slogan_es']);
            $routeModel->slogan_it = trim($args['slogan_it']);
            $routeModel->description_en = trim($args['description_en']);
            $routeModel->description_es = trim($args['description_es']);
            $routeModel->description_it = trim($args['description_it']);
            $routeModel->accesible = ($args['accesible'] == 'true') ? true : false;
            $routeModel->walkable = ($args['walkable'] == 'true') ? true : false;
            $routeModel->bikeable = ($args['bikeable'] == 'true') ? true : false;
            $routeModel->cityId = trim($args['cityId']);
            $routeModel->userId = $userModel->id;

            if ($routeModel->save())
            {
                $json = new Json();
                $json->msgKey  = 'route-saveSuccess';
                $json->message = 'The route was saved successfuly.';
                $json->route = $routeModel->getByName($args['name_en']);
                return $json->render();
            }
        } catch (BDException $e) 
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }
    
    
    /**
     * 
     * @param integer $routeId
     * @param \ArrayIterator $publicToken
     * @param \ArrayIterator $args
     * @return Json
     */
    public static function edit($routeId, $publicToken, $args)
    {
        try
        {
            $userModel = TokenHelper::checkSign($publicToken);
            
            
            $routeModel = new RouteModel($routeId);
            if ($userModel->id != $routeModel->userId)
            {
                HttpError::send(401, 'user-notAllowed', 'You cannot change routes of other users.');
            }
            $routeModel->name_en = (!isset($args['name_en'])) ? $routeModel->name_en : trim($args['name_en']);
            $routeModel->name_es = (!isset($args['name_es'])) ? $routeModel->name_es : trim($args['name_es']);
            $routeModel->name_it = (!isset($args['name_it'])) ? $routeModel->name_it : trim($args['name_it']);
            $routeModel->slogan_en = (!isset($args['slogan_en'])) ? $routeModel->slogan_en : trim($args['slogan_en']);
            $routeModel->slogan_es = (!isset($args['slogan_es'])) ? $routeModel->slogan_es : trim($args['slogan_es']);
            $routeModel->slogan_it = (!isset($args['slogan_it'])) ? $routeModel->slogan_it : trim($args['slogan_it']);
            $routeModel->description_en = (!isset($args['description_en'])) ? $routeModel->description_en : trim($args['description_en']);
            $routeModel->description_es = (!isset($args['description_es'])) ? $routeModel->description_es : trim($args['description_es']);
            $routeModel->description_it = (!isset($args['description_it'])) ? $routeModel->description_it : trim($args['description_it']);
            $routeModel->accesible = (!isset($args['accesible'])) ? false : true;
            $routeModel->walkable = (!isset($args['walkable'])) ? false : true;
            $routeModel->bikeable = (!isset($args['bikeable'])) ? false : true;
            $routeModel->cityId = (!isset($args['cityId'])) ? $routeModel->cityId : trim($args['cityId']);
            if ($routeModel->update())
            {
                $json = new Json();
                $json->msgKey  = 'route-modifySuccess';
                $json->message = 'The route was updated successfuly.';
                return $json->render();
            }
        } catch (BDException $e) 
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }
    
    
    /**
     * Only could delete the owner and any admin user.
     * @param integer $routeId
     * @param \ArrayIterator $publicToken
     * @param \ArrayIterator $args
     * @return Json
     */
    public static function delete($routeId, $publicToken)
    {
        try
        {
            $userModel = TokenHelper::checkSign($publicToken);
            $routeModel = new RouteModel($routeId);
            if ($routeModel->userId != $userModel->id && !UserHelper::isAdmin($userModel->id))
            {
                HttpError::send(401, 'user-notAllowed', 'You cannot delete routes of other users');
            }
            $pictureModel = new PictureModel();
            $commentModel = new CommentModel();
            if (/*!$pictureModel->deleteAllByRouteId($routeId) ||*/ !$commentModel->deleteAllByRouteId($routeId)) 
            {
                HttpError::send(500, 'Fail to delete images or comments from this route');
            }
            if ($routeModel->delete())
            {
                $json = new Json();
                $json->msgKey  = 'route-deleteSuccess';
                $json->message = 'The route was deleted successfuly';
                return $json->render();
            }
        } catch (BDException $e) 
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }

    /**
     *
     * @param \Integer $routeId
     * @param \ArrayIterator $publicToken
     * @param \ArrayIterator $args
     * @return Json
     */
    public static function addPoint($routeId, $publicToken, $args)
    {
        try 
        {
            $userModel = TokenHelper::checkSign($publicToken);

            if (!(UserHelper::isAdmin($userModel->id)) && !(UserHelper::isTouristiamo($userModel->id)) )
            {
                HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to create routes");
            }

            if (
                   empty($args['name_en'])
                || empty($args['name_es'])
                || empty($args['name_it'])
                || empty($args['description_en'])
                || empty($args['description_es'])
                || empty($args['description_it'])
                || empty($args['type'])
                // || empty($args['order'])
                || empty($args['lat'])
                || empty($args['lng']) )
            {   
                HttpError::send(400, 'route-missingInfo', "You must fill name, slogan, description, accesible and city id");
            }
           
            $pointModel = new PointModel();
            $pointModel->name_en = trim($args['name_en']);
            $pointModel->name_es = trim($args['name_es']);
            $pointModel->name_it = trim($args['name_it']);
            $pointModel->description_en = trim($args['description_en']);
            $pointModel->description_es = trim($args['description_es']);
            $pointModel->description_it = trim($args['description_it']);
            $pointModel->type = trim($args['type']);
            $pointModel->pt_order = $args['pt_order'];
            $pointModel->lat = $args['lat'];
            $pointModel->lng = $args['lng'];
            $pointModel->routeId = $routeId;

            if ($pointModel->save())
            {
                $json = new Json();
                $json->msgKey  = 'point-saveSuccess';
                $json->message = 'The point was saved successfuly.';
                return $json->render();
            }
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }
}
