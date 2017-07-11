<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use touristiamo\controller\city\CityCtrl as CityCtrl;

/**
 * Routes for Cities Zone - Using City controller
 */
$app->group('/cities', function()
{
    // Allow preflight
    $this->options('', function(Request $request, Response $response, $args)
    {
        return true;
    });
    $this->get('', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(CityCtrl::getAll());
    });
    $this->get('/{id:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(CityCtrl::getById($args['id']));
    });
    $this->get('/country/{id:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(CityCtrl::getByCountry($args['id']));
    });
    $this->post('', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(CityCtrl::newCity($request->getQueryParams(), $request->getHeader('Auth')));
    });
    $this->put('/{id:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(CityCtrl::edit($args['id'], $request->getHeader('Auth'), $request->getQueryParams()));
    });
    $this->delete('/{id:[0-9]+}', function(Request $request, Response $response, $args)
    {
        return $response->getBody()
                ->write(CityCtrl::delete($args['id'], $request->getHeader('Auth')));
    });
});

