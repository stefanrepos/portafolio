<?php
// Permite que cualquier dominio acceda a este recurso
//The script first checks to see if the request is coming from a trusted domain. If it is, the script will allow the request to proceed. If it is not, the script will deny the request.//

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// contains the database connection information//
require("../conexion.php");
//query to select all the users from the `usuarios` table. The results of the query are stored in a variable called `$res`//
$con = "SELECT * FROM soporte ORDER BY categoria";
$res = mysqli_query($conexion, $con) or die('no consulta de soporte');
//stores each row in an array called `$vec`//
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