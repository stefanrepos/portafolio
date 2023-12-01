<?php
// Permite que cualquier dominio acceda a este recurso

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// **Contiene la información de conexión a la base de datos**
require("../conexion.php");

// **Consulta para seleccionar todos los portafolios de la tabla `portafolio`**
$con = "SELECT * FROM portafolio ORDER BY nombre";
$res = mysqli_query($conexion, $con) or die('no consulta de canal');

// **Almacena cada fila en un array llamado `$vec`**
$vec = [];
while ($reg = mysqli_fetch_array($res))
{
    $vec[] = $reg;
}
// **Codifica el array `$vec` en formato JSON**
$cad =json_encode($vec);
// **Establece el encabezado Content-Type para indicar que la respuesta está en formato JSON**
header('Content-Type:application/json');
// **Envía la respuesta JSON**
echo $cad;
?>