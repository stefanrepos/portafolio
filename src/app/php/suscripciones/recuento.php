<?php
// Permite que cualquier dominio acceda a este recurso
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Contiene la información de conexión a la base de datos
require("../conexion.php");

// Consulta SQL para contar las suscripciones por tipo
$query = "SELECT categoria, COUNT(*) AS cantidad FROM servicios GROUP BY tipo";
$result = mysqli_query($conexion, $query) or die('Error en la consulta de suscripciones por tipo');

// Almacena los resultados en un arreglo asociativo
$tiposDeSuscripcion = [];
while ($row = mysqli_fetch_assoc($result)) {
    $tiposDeSuscripcion[] = $row;
}

// Codifica los resultados como JSON y envíalos al cliente
$response = json_encode($tiposDeSuscripcion);
header('Content-Type: application/json');
echo $response;
?>
