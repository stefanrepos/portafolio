<?php
/* <!--probar el loginlocalhost/portafolio/src/app/php/login/login.php?user=superuser@gmail.com&clave=123 --> */
// **Comprueba las cabeceras CORS**
header('Access-Control-Allow-Origin: *');       
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// **Recupera las credenciales del usuario de la URL**
$user = $_GET['user'];
$cla = $_GET['clave'];

// **Se conecta a la base de datos**
require("../conexion.php");

// **Ejecuta la consulta SQL para recuperar la información del usuario**
$con = "SELECT * from bkusuario WHERE usuario = '$user' AND clave=sha1('$cla')";
$res = mysqli_query($conexion, $con) or die('no encontro el usuario');

// **Inicializa un array vacío**
$vec = [];

// **Recupera la información del usuario del conjunto de resultados**
while ($reg = mysqli_fetch_array($res))
{
    $vec[] = $reg;
}
//arreglo contiene un par clave-valor, donde la clave es "validar" y el valor es "no valida**//

// **Establece el estado de validación en función de los resultados de la consulta**
if($vec==[]){
    $vec[0] = array("validar" => "no valida");
} else{
    $vec[0]['validar'] = "valida";
}

// **odifica el array como JSON**
$cad =json_encode($vec);

// **Refleja la respuesta JSON**
echo $cad;

// **Establece el encabezado de tipo de contenido**
header('Content-Type:application/json');

?>





