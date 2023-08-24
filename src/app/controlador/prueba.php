<?php

//ejecucion del modelo  
require_once('/xampp/htdocs/portafolio/src/app/modelo/conexion.php');
require_once('/xampp/htdocs/portafolio/src/app/modelo/prueba.php');

$control = $_GET['control'];
$obj = new prueba ($conexion);

switch($control){
    case 'prueba':
        $datos = $obj ->consultar();    
    break;

}







?>