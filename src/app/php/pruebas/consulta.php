<?php
// Permite que cualquier dominio acceda a este recurso

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Conectar database connection/
require("../conexion.php");
// Definir Query // 
$con = "SELECT * FROM areas_culturales ORDER BY nombre";
$res = mysqli_query($conexion, $con) or die('no consulta de areas');
//Store each row en el array //
$vec = [];
while ($reg = mysqli_fetch_array($res))
{
    $vec[] = $reg;
}

// Consulta para calcular el recuento de áreas creativas
$conConteoCreativas = "SELECT COUNT(*) AS Recuento_Areas_Creativas FROM areas_culturales WHERE creatividad = TRUE";
$resConteoCreativas = mysqli_query($conexion, $conConteoCreativas) or die('no se pudo calcular el recuento de áreas creativas');
$conteoCreativas = mysqli_fetch_assoc($resConteoCreativas);

// Agregar el resultado al array
$vec[] = $conteoCreativas;




//Encodes and send to client -- 
$cad =json_encode($vec);
echo $cad;
//response is in JSON format.
header('Content-Type:application/json');
?>