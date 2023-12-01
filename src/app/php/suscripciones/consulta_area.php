<?php
// Permite que cualquier dominio acceda a este recurso
//The script first checks to see if the request is coming from a trusted domain. If it is, the script will allow the request to proceed. If it is not, the script will deny the request.//

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// contains the database connection information//
require("../conexion.php");
//query to select all the columns from 3 different table  The results of the query are stored in a variable called `$res`//
$con = "SELECT *
        FROM areas
        ORDER BY nombrearea";

$res = mysqli_query($conexion, $con) or die('no se consulto el area');
$vec = [];
while ($reg = mysqli_fetch_array($res))
{
    $vec[] = $reg;
}

//then encodes the array as JSON and sends it back to the client
$response =json_encode($vec);
header('Content-Type:application/json');
echo $response;
//the response is in JSON format.
?>