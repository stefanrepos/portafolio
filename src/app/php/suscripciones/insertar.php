<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json   = file_get_contents('php://input');
$params = json_decode($json);
// Los datos JSON se decodificaron correctamente, continúa con tu consulta SQL
require("../conexion.php");

$ins = "INSERT INTO servicios (
        nombre, 
        descripcion, 
        FO_areas, 
        precio, 
        FO_moneda, 
        duracion, 
        Imagen, 
        contacto, 
        disponibilidad, 
        requisitos, 
        fechaPuplic,
        creador) 
    VALUES ('$params->nombre',
    '$params->descripcion', 
     $params->FO_areas,
    '$params->precio', 
     $params->FO_moneda, 
    '$params->duracion', 
    '$params->Imagen', 
    '$params->contacto', 
    '$params->disponibilidad', 
    '$params->requisitos',
    '$params->fechaPuplic',
    '$params->creador')"; 
/* 
    $ins = "INSERT INTO servicios (
        nombre, 
        descripcion, 
        FO_areas, 
        precio, 
        FO_moneda, 
        duracion, 
        Imagen, 
        contacto, 
        disponibilidad, 
        requisitos, 
        fechaPuplic,
        creador) 
    VALUES ('ConsultaStefan',
    '$params->Consultas Desarrollo', 
     '5',
    '25000', 
     '1', 
    ' 4 horas', 
    '0', 
    '3132537654', 
    'si', 
    'si',
    '2023-10-29',
    'Superuser')"; */

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