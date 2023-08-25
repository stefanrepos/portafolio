
<?php
// Permite que cualquier dominio acceda a este recurso
//The script first checks to see if the request is coming from a trusted domain. If it is, the script will allow the request to proceed. If it is not, the script will deny the request.//

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');
$params = json_decode ($json);
require("../conexion.php");

$ins = "INSERT INTO bkusuario(nombre, usuario, clave, tipo) VALUES ('STEFA','STEFANREPOS',SHA1('12345'),'VISITANTE')";


mysqli_query($conexion, $ins) or die('no inserto');

class Result{}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';


header('Content-Type:application/json');
echo json_encode($response);


?>
