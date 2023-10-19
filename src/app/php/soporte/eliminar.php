<?php
// Permite que cualquier dominio acceda a este recurso

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// conexion php - la funcion requiere es fatal error , por lo que si falla la conexion se detendra la aplicacion 
require("../conexion.php");

$del = "DELETE FROM soporte WHERE id_soporte =". $_GET['id'];

mysqli_query($conexion, $del) or die("no elimino");

class Result
{
}

$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'Soporte eliminado';


header('Content-Type:application/json');
echo json_encode($response);


?>