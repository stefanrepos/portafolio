<?php
// configurar el xaamp

$servidor = "localhost";
$usuario  = "root";
$clave = "";
$bd = "bkeaportafolio"; // base de datos 

// Crear una conexión
$conexion = new mysqli($servidor, $usuario, $clave, $bd);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);}
    //else { echo "Conexión exitosa";
//}
?>
