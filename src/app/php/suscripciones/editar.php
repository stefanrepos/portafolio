<?php
//Permite que cualquier dominio acceda a este recurso
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// leer los datos JSON
$json   = file_get_contents('php://input');
$id     = $_GET['id'];
// decodificar el objeto json para convertir esos datos en un objeto PHP - llamado $params
$params = json_decode($json);
// incluir el contenido de "conexion.php"  con las configuraciones de conexión a la base de datos, 
require("../conexion.php");
//campos a editar
$editar = "UPDATE servicios 
SET nombre = '$params->nombre',
    descripcion = '$params->descripcion', 
    FO_areas = $params->FO_areas,
    precio ='$params->precio', 
    FO_moneda = $params->FO_moneda, 
    duracion = '$params->duracion', 
    Imagen = '$params->Imagen', 
    contacto = '$params->contacto', 
    disponibilidad = '$params->disponibilidad', 
    requisitos = '$params->requisitos',
    fechaPuplic = '$params->fechaPuplic',
    creador = '$params->creador'
WHERE id_servicio=$id";

mysqli_query($conexion, $editar) or die("no se edito ningun registro");

class Result
{
}
;

$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'datos modificados';

echo json_encode($response);
header('Content-Type:application/json');



?>