
<?php
// Permite que cualquier dominio acceda a este recurso
//The script first checks to see if the request is coming from a trusted domain. If it is, the script will allow the request to proceed. If it is not, the script will deny the request.//

header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


require("../conexion.php");

$del = "DELETE FROM bkusuario WHERE ID_usuario =" . $_GET['id'];
    
mysqli_query($conexion, $del) or die("no elimino");

class Result{}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'usuario eliminado';


header('Content-Type:application/json');
echo json_encode($response);


?>
