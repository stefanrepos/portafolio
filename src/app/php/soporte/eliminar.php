<?php
// Permite que cualquier dominio acceda a este recurso
//
// Esta sección del código establece las cabeceras CORS para permitir que cualquier dominio acceda a la API.

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// conexion php - la funcion requiere es fatal error , por lo que si falla la conexion se detendra la aplicacion
// Esta sección del código incluye el archivo `conexion.php`, que contiene la información de conexión a la base de datos.
require("../conexion.php");

// Realiza una consulta SQL para eliminar el soporte con el ID especificado.
$del = "DELETE FROM soporte WHERE id_soporte =". $_GET['id'];
mysqli_query($conexion, $del) or die("no elimino");

// Crea una nueva instancia de la clase `Result` para almacenar la respuesta de la API.
// Establece el resultado de la API.
// Establece el mensaje de la API.
class Result
{
}

$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'Soporte eliminado';


header('Content-Type:application/json');
echo json_encode($response);


?>