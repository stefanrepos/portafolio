<?php
header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json = file_get_contents('php://input');
$params = json_decode($json);
// Los datos JSON se decodificaron correctamente, continúa con tu consulta SQL
require("../conexion.php");

$ins = "INSERT INTO bkusuario(nombre, usuario, clave, tipo) VALUES ('$params->nombre', '$params->usuario', sha1('$params->clave'), '$params->tipo')";

/* $ins = "INSERT INTO bkusuario(nombre, usuario, clave, tipo) VALUES ('STEFA','STEFANREPOS',SHA1('12345'),'VISITANTE')";
 */ // probar servicio insertar /// 

mysqli_query($conexion, $ins) or die('no inserto');
$mensaje = "se guardo correctamente ";

class Result{
    public $resultado;
    public $mensaje;
}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';
header('Content-Type:application/json');
echo json_encode($response);

?>