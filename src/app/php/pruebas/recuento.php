<?php
// Permite que cualquier dominio acceda a este recurso
header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Conectar database connection/
require("../conexion.php");

// Consulta SQL para calcular el recuento de áreas en cada categoría
$conConsulta = "
SELECT 
    'Áreas Creativas' AS Categoria,
    SUM(creatividad) AS Cantidad
FROM areas_culturales
UNION ALL
SELECT 
    'Áreas Cultura' AS Categoria,
    SUM(cultura) AS Cantidad
FROM areas_culturales
UNION ALL
SELECT 
    'Áreas Propiedad Intelectual' AS Categoria,
    SUM(propiedad_intelectual) AS Cantidad
FROM areas_culturales;
";

$resConsulta = mysqli_query($conexion, $conConsulta) or die('No se pudo realizar la consulta');

// Obtener los resultados como un array asociativo
$resultado = [];
while ($row = mysqli_fetch_assoc($resConsulta)) {
    $resultado[] = $row;
}

// Encodes and send to client -- 
$cad = json_encode($resultado);
echo $cad;
// response is in JSON format.
header('Content-Type: application/json');
?>
