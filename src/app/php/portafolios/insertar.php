<?php
// **Permite que cualquier dominio acceda a este recurso**

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// **lee los datos JSON del cliente utilizando la función file_get_contents(). 
// **Los datos JSON se decodifican utilizando la función json_decode().
$json   = file_get_contents('php://input');
$params = json_decode($json);
require("../conexion.php");

// **Escribe la consulta SQL**
$ins = "INSERT INTO portafolio (creador, 
        nombre, 
        descripcion, 
        tipo, 
        FO_areas, 
        estado, 
        fecha_creacion, 
        FO_canales) 
    VALUES ('$params->creador', 
        '$params->nombre', 
        '$params->descripcion', 
        '$params->tipo', 
         $params->FO_areas, 
        '$params->estado', 
        '$params->fecha_creacion',
         $params->FO_canales)";

//las variables numericas van sin la ' , probada ok funcionando// 
/* $ins = "INSERT INTO portafolio (creador, 
        nombre, 
        descripcion, 
        tipo, 
        FO_areas, 
        estado, 
        fecha_creacion, 
        FO_canales) 
VALUES ('Prueba',
        'MiPrueba',
        'Registro prueba',
        'Profesional',
        '1',
        'activo',
        '2023-10-29',
        '1')";
 */

mysqli_query($conexion, $ins) or die('no inserto');
$mensaje = "se guardo correctamente ";

// **Crea un objeto Result**
class Result
{
    public $resultado;
    public $mensaje;
}

// **Asigna los valores al objeto Result**
$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'datos grabados';

// **Establece el encabezado Content-Type**
header('Content-Type:application/json');

// **Envía el objeto Result codificado como JSON**
echo json_encode($response);

?>