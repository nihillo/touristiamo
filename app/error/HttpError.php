<?php

/**
 * Description of HttpError
 *
 * @author I.E.S AYALA
 */

namespace touristiamo\error;


class HttpError
{
    /**
     * Método encargado de enviar errores al cliente a través de JSON y
     * el código HTTP.
     * 
     * @param Integer $httpErrorCode
     * @param String $message
     * @return boolean Return true or exec exit
     */
    public static function send($httpErrorCode, $msgKey,  $message)
    {
        http_response_code($httpErrorCode);
        exit(
            json_encode(
                array(
                    'msgKey'  =>  $msgKey,
                    'message'   =>  $message
                )
            )    
        );
        return true;
    }
}
