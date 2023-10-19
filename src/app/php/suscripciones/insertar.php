<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json   = file_get_contents('php://input');
$params = json_decode($json);

// Check if $params is not null
require("../conexion.php");

$ins = "INSERT INTO servicios (
        nombre, 
        descripcion, 
        categoria, 
        precio, 
        moneda, 
        duracion, 
        Imagen, 
        destacado, 
        disponibilidad, 
        requisitos, 
        fechaPuplic) 
    VALUES ('$params->nombre',
    '$params->descripcion', 
    '$params->categoria',
    '$params->precio', 
    '$params->moneda', 
    '$params->duracion', 
    '$params->Imagen', 
    '$params->destacado', 
    '$params->disponibilidad', 
    '$params->requisitos',
    '$params->fechaPuplic')";

mysqli_query($conexion, $ins) or die('no inserto');

$mensaje = "se guardo correctamente ";

class Result
{
    public $resultado;
    public $mensaje;
}

$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'datos grabados';
header('Content-Type:application/json');
echo json_encode($response);
?>