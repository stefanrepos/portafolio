    <?php

    // **Permite que cualquier dominio acceda a este recurso**
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    // **Lee los datos JSON del cliente**
    $json   = file_get_contents('php://input');
    $params = json_decode($json);

    // Los datos JSON se decodificaron correctamente, continúa con tu consulta SQL
    require("../conexion.php");

    // **Escribe la consulta SQL**
    $ins = "INSERT INTO bkusuario(
        nombre, 
        usuario, 
        clave, 
        tipo) 
    VALUES (
        '$params->nombre', 
        '$params->usuario', 
        sha1('$params->clave'), 
        '$params->tipo')";

    /* $ins = "INSERT INTO bkusuario(nombre, usuario, clave, tipo) VALUES ('StefaniaSuperUser','superuser@gmail.com',SHA1('123'),'ADMINISTRADOR')";
    // probar servicio insertar ///  */

    // **Comprueba que la consulta se ejecutó correctamente**
    mysqli_query($conexion, $ins) or die('no inserto');
    $mensaje = "se guardo correctamente ";

    // **Crea un objeto Result**
    class Result
    {
        public $resultado;
        public $mensaje;
    }
    // **Asigna los valores al objeto Result**
    $response            = new Result();
    $response->resultado = 'OK';
    $response->mensaje   = 'datos grabados';

    // **Establece el encabezado Content-Type**
    header('Content-Type:application/json');
    
    // **Envía el objeto Result codificado como JSON**
    echo json_encode($response);

    ?>