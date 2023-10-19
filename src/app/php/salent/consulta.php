<?php
header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// contains the database connection information//
require("../conexion.php");
//query to select all the users from the `usuarios` table. The results of the query are stored in a variable called `$res`//
$con = "SELECT * FROM prjclient ORDER BY numero";
$res = mysqli_query($conexion, $con) or die('no consulta de stakeholder');
//stores each row in an array called `$vec`//
$vec = [];
while ($reg = mysqli_fetch_array($res))
{
    $vec[] = $reg;
}

//then encodes the array as JSON and sends it back to the client
$cad =json_encode($vec);
header('Content-Type:application/json');
echo $cad;
//the response is in JSON format.
?>