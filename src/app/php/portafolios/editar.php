<?php
// **Permite que cualquier dominio acceda a este recurso**
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// **Lee los datos JSON**
$json   = file_get_contents('php://input');
// **Obtiene el ID del portafolio que se va a editar**
$id     = $_GET['id'];
// **Decodifica el objeto json para convertir esos datos en un objeto PHP - llamado $params**
$params = json_decode($json);
// **Incluir el contenido de "conexion.php"  con las configuraciones de conexión a la base de datos,**
require("../conexion.php");

// **Crea una consulta SQL para actualizar el portafolio**
// **Los campos que se actualizan son:**
// * `creador`: El nombre del creador del portafolio.
// * `nombre`: El nombre del portafolio.
// * `descripcion`: La descripción del portafolio.
// * `tipo`: El tipo de portafolio.
// * `FO_areas`: Las áreas de interés del portafolio.
// * `estado`: El estado del portafolio.
// * `fecha_creacion`: La fecha de creación del portafolio.
// * `FO_canales`: Los canales de distribución del portafolio.
$editar = "UPDATE portafolio 
SET 
creador = '$params->creador',
nombre='$params->nombre',
descripcion = '$params->descripcion', 
tipo = '$params->tipo',
FO_areas  = $params->FO_areas,
estado = '$params->estado',
fecha_creacion = NOW(),
FO_canales = $params->FO_canales
WHERE id_portafolio=$id";

// **Ejecuta la consulta SQL**
mysqli_query($conexion, $editar) or die("Portafolio no edito");
// **Si la consulta se ejecuta correctamente, crea un objeto `Result` con los campos `resultado` y `mensaje`**
class Result
{
}
;
$response            = new Result();
$response->resultado = 'OK';
$response->mensaje   = 'datos modificados';

// **Envía la respuesta JSON al cliente**
echo json_encode($response);

// **Establece el encabezado `Content-Type` para indicar que la respuesta está en formato JSON**
header('Content-Type:application/json');

?>