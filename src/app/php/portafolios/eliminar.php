<?php
// **Permite que cualquier dominio acceda a este recurso**

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// **Conexion php - la funcion requiere es fatal error , por lo que si falla la conexion se detendra la aplicacion**
// **Se incluye el archivo `conexion.php` , que contiene la informacion de conexion a la base de datos**
require("../conexion.php");

// **Realiza una consulta SQL para eliminar un portafolio**
// **La consulta elimina el portafolio con el ID especificado en la variable `$_GET['id']`**
$del = "DELETE FROM portafolio WHERE id_portafolio =" . $_GET['id'];
// **Ejecuta la consulta SQL**
mysqli_query($conexion, $del) or die("no elimino");
// **Crea un objeto `Result` con los campos `resultado` y `mensaje`**
// **El campo `resultado` indica si la consulta se ejecutó correctamente**
// **El campo `mensaje` proporciona un mensaje que describe el resultado de la consulta**

class Result
{
}
$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'portafolio eliminado';

// **Establece el encabezado `Content-Type` para indicar que la respuesta está en formato JSON**
header('Content-Type:application/json');

// **Codifica el objeto `Result` en formato JSON**
echo json_encode($response);

?>