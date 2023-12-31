<?php
// Permite que cualquier dominio acceda a este recurso
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// conexion php - la funcion requiere es fatal error , por lo que si falla la conexion se detendra la aplicacion 
require("../conexion.php");
// **Ejecuta la consulta SQL para eliminar el usuario**

$del = "DELETE FROM bkusuario WHERE ID_usuario =" . $_GET['id'];
mysqli_query($conexion, $del) or die("no elimino");

// **Crea un objeto Result con los resultados de la consulta**
class Result
{
}
$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'usuario eliminado';

// **Establece el encabezado `Content-Type` para indicar que la respuesta está en formato JSON**
header('Content-Type:application/json');

// **Codifica el objeto Result como JSON**
echo json_encode($response);

?>