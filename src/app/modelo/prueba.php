<?php

class prueba {

    public $conexion;
    public function __construct($conexion) {
        $this->conexion = $conexion;
    }
public function consultar (){
        $con = "SELECT * FROM portafolio ORDER BY nombre";
        $res = mysqli_query($this->conexion,$con) or die ("no se encontro la tabla");
     
        $vec = array(); // Corrección: inicializar el array correctamente
        while ($arreglo=mysqli_fetch_array($res)){
         //obtiene el numero de filas que tiene la consulta y los datos del
         //resultado.
          $vec [] = $arreglo;
        }
        return $vec;
    }

}


?>