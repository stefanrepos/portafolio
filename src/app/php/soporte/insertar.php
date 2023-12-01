<?php
// Establece las cabeceras CORS para permitir que cualquier dominio acceda a la API.

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json   = file_get_contents('php://input');
$params = json_decode($json);
// Se incluye el archivo de conexión para establecer acceso a la base de datos.
require("../conexion.php");
// Los datos JSON se decodificaron correctamente, continúa con tu consulta SQL
$ins = "INSERT INTO soporte (
    creador, 
    categoria, 
    contacto,
    tipo,
    comentario,
    estado,
    plazo,
    prioridad,
    asignacion,
    fecha_creacion,
    fecha_actualizacion,
    fecha_cierre) 
VALUES (
    '$params->creador', 
    '$params->categoria', 
    '$params->contacto',
    '$params->tipo',
    '$params->comentario',
    '$params->estado',
    '$params->plazo',
    '$params->prioridad',
    '$params->asignacion',
    '$params->fecha_creacion',
    '$params->fecha_actualizacion',
    '$params->fecha_cierre'
    )";

//$ins = "INSERT INTO soporte (contacto, categoria, tipo) VALUES ('micontacto@gmail.com','Falla tecnica','Credenciales');";

// Si la consulta SQL no se ejecuta correctamente, muestra un mensaje de error.
mysqli_query($conexion, $ins) or die('no inserto');
// Establece el mensaje de respuesta de la API.
$mensaje = "se guardo correctamente ";

// Crea una nueva instancia de la clase `Result` para almacenar la respuesta de la API. 
class Result
{
    public $resultado;
    public $mensaje;
}

$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'datos grabados';

// Envía la respuesta de la API al cliente en formato JSON.
header('Content-Type:application/json');
echo json_encode($response);

?>