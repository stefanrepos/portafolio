<?php

class prueba{
    public $conexion;
    public function __construct($conexion){
        $this->conexion = $conexion;
    
    }
        public function consultar (){
        $con = "SELECT * FROM usuarios ORDER BY nombre";
        $res = mysqli_query($this->conexion, $con) or die("no se encuentra la tabla dtp");

        $vec = array();
        while ($arreglo = mysqli_fetch_array($res)){
            ;
            echo "<br>".$arreglo['nombre']."<br>";
            $vec[]=$arreglo;
           }

           return $vec;
          // return json_encode(mysqli_fetch_all($res));
        
    }

}

?>