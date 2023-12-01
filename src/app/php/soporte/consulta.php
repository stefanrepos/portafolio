<?php
// Permite que cualquier dominio acceda a este recurso
// El script primero verifica si la solicitud proviene de un dominio de confianza. 
// Si es así, el script permitirá que la solicitud continúe. Si no, el script denegará la solicitud.

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Contiene la información de conexión a la base de datos
require("../conexion.php");
// Consulta para seleccionar todos los soportes de la tabla `soporte`
// Los resultados de la consulta se almacenan en una variable llamada `$res`
$con = "SELECT * FROM soporte ORDER BY categoria";
$res = mysqli_query($conexion, $con) or die('no consulta de soporte');
// Almacena cada fila de la consulta en un vector llamado `$vec`
$vec = [];
while ($reg = mysqli_fetch_array($res))
{
    $vec[] = $reg;
}

// Codifica el vector como JSON y lo envía de vuelta al cliente
$cad =json_encode($vec);
echo $cad;
// La respuesta está en formato JSON
header('Content-Type:application/json');
?>