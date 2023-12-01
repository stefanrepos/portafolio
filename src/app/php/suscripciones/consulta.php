<?php
// Permite que cualquier dominio acceda a este recurso
// El script primero verifica si la solicitud proviene de un dominio de confianza. 
// Si es así, el script permitirá que la solicitud continúe. Si no, el script denegará la solicitud.

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Contiene la información de conexión a la base de datos
require("../conexion.php");

// Consulta para seleccionar todos los campos de 3 tablas diferentes
// Los resultados de la consulta se almacenan en una variable llamada `$res`
$con = "SELECT s.*, m.nombrearea, n.moneda, n.sigla
        FROM servicios s
        INNER JOIN areas m ON s.FO_areas = m.id_areas
        INNER JOIN monedas n ON s.FO_moneda = n.id_moneda
        ORDER BY s.nombre";

$res = mysqli_query($conexion, $con) or die('no consulta de suscripcion');

// Recorre los resultados de la consulta y los almacena en un vector
$vec = [];
while ($reg = mysqli_fetch_array($res))
{
    $vec[] = $reg;
}

// Codifica el vector como JSON y lo envía de vuelta al cliente
$response =json_encode($vec);
header('Content-Type:application/json');

// La respuesta está en formato JSON.
echo $response;
?>