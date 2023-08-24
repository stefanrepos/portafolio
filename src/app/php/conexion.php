<?php
// configurar el xaamp

$servidor = "localhost";
$usuario  = "root";
$clave = "";
$bd = "portafolio";

$conexion = mysqli_connect($servidor, $usuario, $clave) or die("no se pudo conectar a mysql");
mysqli_select_db($conexion,$bd) or die("no se pudo conectar a la base de datos");


?>
