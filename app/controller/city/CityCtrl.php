<?php

namespace touristiamo\controller\city;

use touristiamo\models\CityModel as CityModel;
use touristiamo\models\CountryModel as CountryModel;
use touristiamo\models\RouteModel as RouteModel;
use touristiamo\models\PictureModel as PictureModel;
use touristiamo\models\CommentModel as CommentModel;
use touristiamo\View as Json;
use touristiamo\helper\TokenHelper as TokenHelper;
use touristiamo\error\HttpError as HttpError;
use touristiamo\helper\UserHelper as UserHelper;
use touristiamo\exception\BDException as BDException;


/**
 * City Controller
 *
 * @author I.E.S Francisco Ayala
 */
class CityCtrl
{
    /**
     * Get all cities
     * @return Json
     */
    public static function getAll()
    {
        try
        {
            $cityModel = new CityModel();
            $json = new Json();
            $json->cities = $cityModel->getAll();
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }

    }

    /**
     * Get city by id
     * @return Json
     */
    public static function getById($id)
    {
        try
        {
            $cityModel = new CityModel();
            $json = new Json();
            $json->city = $cityModel->getById($id);
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }

    }

    /**
     * Get all cities by country
     * @return Json
     */
    public static function getByCountry($countryId)
    {
        try
        {
            $cityModel = new CityModel();
            $json = new Json();
            $json->cities = $cityModel->getAllByCountryId($countryId);
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }

    }

    /**
     *
     * @param \ArrayIterator $args
     * @param \ArrayIterator $publicToken
     * @return Json
     */
    public static function newCity($args, $publicToken)
    {
        try
        {
            $userModel = TokenHelper::checkSign($publicToken);
            if (!isset($args['name_en']) || !isset($args['name_es']) || !isset($args['name_it']) || !isset($args['countryId']))
            {
                HttpError::send(400, 'city-missingInfo', 'You must fill the name and countryId');
            }
            if (!UserHelper::isTouristiamo($userModel->id) && !UserHelper::isAdmin($userModel->id))
            {
                HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to create cities");
            }
            $countryModel = new CountryModel($args['countryId']);
            $cityModel = new CityModel();
            $cityModel->countryId = $countryModel->id;
            $cityModel->name_en = trim($args['name_en']);
            $cityModel->name_es = trim($args['name_es']);
            $cityModel->name_it = trim($args['name_it']);
            if ($cityModel->save())
            {
                $json = new Json();
                $json->msgKey = 'city-saveSuccess';
                $json->message = "The city was saved successfully.";
                return $json->render();
            }
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }
    
    
    /**
     * 
     * @param integer $cityId
     * @param \ArrayIterator $publicToken
     * @param \ArrayIterator $args
     * @return Json
     */
    public static function edit($cityId, $publicToken, $args)
    {
        try
        {
            $userModel = TokenHelper::checkSign($publicToken);
            $cityModel = new CityModel($cityId);
            if (!UserHelper::isTouristiamo($userModel->id) && !UserHelper::isAdmin($userModel->id))
            {
                HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to update this city");
            }
            $cityModel->name_en = (!isset($args['name_en'])) ? $cityModel->name_en : trim($args['name_en']);
            $cityModel->name_es = (!isset($args['name_es'])) ? $cityModel->name_es : trim($args['name_es']);
            $cityModel->name_it = (!isset($args['name_it'])) ? $cityModel->name_it : trim($args['name_it']);
            $cityModel->countryId = (!isset($args['countryId'])) ? $cityModel->countryId : trim($args['countryId']);
            if ($cityModel->update())
            {
                $json = new Json();
                $json->msgKey = 'city-modifySuccess';
                $json->message = "The city was modified successfuly.";
                return $json->render();
            }
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }
    
    
    /**
     * Delete a city. For deleting a city is necesary delete all routes join to this
     * city.
     * @param integer $id
     * @param \ArrayIterator $publicToken
     * @return Json
     */
    public static function delete($id, $publicToken)
    {
        try
        {
            $userModel = TokenHelper::checkSign($publicToken);
            if (!UserHelper::isTouristiamo($userModel->id) && !UserHelper::isAdmin($userModel->id))
            {
                HttpError::send(401, 'user-notAllowed', "The user doesn't have permissions to delete cities");
            }
            $cityModel = new CityModel($id);
            $routeModel = new RouteModel();
            $pictureModel = new PictureModel();
            $commentModel = new CommentModel();
            // Delete all comments, pictures and routes from this city
            foreach ($routeModel->getAllByCity($cityModel->id) as $route)
            {
                $routeMod = new RouteModel($route->id);
                if (!$pictureModel->deleteAllByRouteId($routeMod->id) || !$commentModel->deleteAllByRouteId($routeMod->id))
                {
                    HttpError::send(500, 'image-deleteError', 'Failed to delete images or comments from this route');
                }
                $routeMod->delete();
            }
            if ($cityModel->delete())
            {
                $json = new Json();
                $json->msgKey = 'city-deleteSuccess';
                $json->message = "The city was deleted successfuly.";
                return $json->render();
            }
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }
}
