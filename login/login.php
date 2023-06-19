<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica PHP 3D - Formulario de Registro</title>
    <link rel="stylesheet" href="result-style.css">
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellidopa = $_POST["apellidopa"];
    $apellidoma = $_POST["apellidoma"];
    $fecha = $_POST["fecha"];
    $telefono = $_POST["telefono"];
    $usuario = $_POST["usuario"];
    $correo = $_POST["correo"];
    $contrasena = $_POST["contrasena"];
    $edad = $_POST["edad"];
    $sexo = $_POST["sexo"];

    echo "<div class='container'>";
    echo "<div class='form-box'>";
    echo "<h2>Registro exitoso</h2>";
    echo "<table class='result-table'>";
    echo "<tr><td>Nombre:</td><td>$nombre</td></tr>";
    echo "<tr><td>Apellido paterno:</td><td>$apellidopa</td></tr>";
    echo "<tr><td>Apellido materno:</td><td>$apellidoma</td></tr>";
    echo "<tr><td>Fecha de nacimiento:</td><td>$fecha</td></tr>";
    echo "<tr><td>Número de teléfono:</td><td>$telefono</td></tr>";
    echo "<tr><td>Nombre de usuario:</td><td>$usuario</td></tr>";
    echo "<tr><td>Correo electrónico:</td><td>$correo</td></tr>";
    echo "<tr><td>Contraseña:</td><td>$contrasena</td></tr>";
    echo "<tr><td>Edad:</td><td>$edad</td></tr>";
    echo "<tr><td>Sexo:</td><td>$sexo</td></tr>";
    echo "</table>";
    echo "</div>";
    echo "</div>";
}
?>
</body>
</html>

