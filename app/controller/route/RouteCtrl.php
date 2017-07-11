<?php

namespace touristiamo\controller\route;

use touristiamo\models\RouteModel as RouteModel;
use touristiamo\exception\BDException as BDException;
use touristiamo\error\HttpError as HttpError;
use touristiamo\View as Json;
use touristiamo\models\CommentModel as CommentModel;
use touristiamo\models\PointModel as PointModel;

/**
 * Controller for routes
 *
 * @author I.E.S Francisco Ayala
 */
class RouteCtrl
{
    /**
     * Get all routes
     * @return Json
     */
    public static function getAll()
    {
        $routesModel = new RouteModel();
        $json = new Json();
        try
        {
            $json->routes = $routesModel->getAll();
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(500, 'db-error', $e->getBdMessage());
        }
    }

    /**
     * Get all routes by country id.
     * @return Json
     */
    public static function getAllByCountry($countryId)
    {
        $routesModel = new RouteModel();
        $json = new Json();
        try
        {
            if (empty($routesModel->getAllByCountry($countryId)))
            {
                HttpError::send (400, 'country-noRoutesFound', "This country doesn't have routes yet!");
            }
            $json->routes = $routesModel->getAllByCountry($countryId);
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }

    /**
     * Get all routes by city id.
     * @param integer $cityId
     * @return Json
     */
    public static function getAllByCity($cityId)
    {
        $routesModel = new RouteModel();
        $json = new Json();
        try
        {
            if (empty($routesModel->getAllByCity($cityId)))
            {
                HttpError::send (400, 'city-noRoutesFound', "This city doesn't have routes yet!");
            }
            $json->routes = $routesModel->getAllByCity($cityId);
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }

    /**
     * Get route by id.
     * @param integer $id
     * @return Json
     */
    public static function getById($id)
    {
        $routesModel = new RouteModel();
        $json = new Json();
        try
        {
            if (empty($routesModel->getById($id)))
            {
                HttpError::send (400, 'city-noRoutesFound', "Route not found");
            }
            $json->routes = $routesModel->getById($id);
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }

    /**
     * Get all routes by route id.
     * @param integer $routeId
     * @return Json
     */
    public static function getComments($routeId)
    {
        try
        {
            $commentModel = new CommentModel();
            $json = new Json();
            if ( !($json->comments = $commentModel->getAllByRouteId($routeId)) )
            {
                HttpError::send(400, 'route-noCommentsFound', "This route doesn't have any comment.");
            }
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }

    /**
     * Get the total score from user comments
     * @param integer $routeId
     * @return Json
     */
    public static function getScore($routeId)
    {
        try
        {
            $commentModel = new CommentModel();
            $json = new Json();
            if ( !($comments = $commentModel->getAllByRouteId($routeId)) )
            {
                HttpError::send(400, 'route-noScoreFound', "This route doesn't have any score.");
            }
            $score = 0;
            $numComments = count($comments);
            foreach ($comments as $comment)
            {
                $score += intval($comment->score);
            }
            $json->score = $score / $numComments;
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }

    /**
     * Get the route points
     * @param integer $routeId
     * @return Json
     */
    public static function getPoints($routeId)
    {
        try
        {
            $pointModel = new PointModel();
            $json = new Json();
            if ( !($points = $pointModel->getAllByRouteId($routeId)) )
            {
                HttpError::send(400, 'route-noPointsFound', "This route doesn't have any points.");
            }
            
            $json->points = $points;
            return $json->render();
        } catch (BDException $e)
        {
            HttpError::send(400, 'db-error', $e->getBdMessage());
        }
    }
}
