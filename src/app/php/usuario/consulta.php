<?php
// Permite que cualquier dominio acceda a este recurso

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// contains the database connection information//
require("../conexion.php");
// query selector 
$con = "SELECT * FROM bkusuario ORDER BY nombre";
$res = mysqli_query($conexion, $con) or die('no consulta de usuario');
//vector 
$vec = [];
while ($reg = mysqli_fetch_array($res))
{
    $vec[] = $reg;
}
//then encodes the array as JSON and sends it back to the client
$cad =json_encode($vec);
echo $cad;
//the response is in JSON format.
header('Content-Type:application/json');
?>