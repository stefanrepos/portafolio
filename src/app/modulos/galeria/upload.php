<?php

// Decodificar el JSON de la imagen
$imagen = json_decode($_POST['imagen']);

// Generar un nombre de archivo único
$nombre_archivo = uniqid();

// Crear una ruta para la imagen
$ruta_destino = "C:\xampp\htdocs\portafolio\src\app\modulos\galeria\imagenes\uploads" . '/' . $nombre_archivo;

// Guardar la imagen en la ruta especificada
file_put_contents($ruta_destino, base64_decode($imagen->base64));

// Mostrar un mensaje de éxito
echo "La imagen se ha guardado correctamente.";

?>

