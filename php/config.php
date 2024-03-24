<?php
$host="localhost";
$user="id21998100_blindmonster";
$password="Rf^dCa&Mkg6EZLxxDhA8vz";
$database="id21998100_cashviewer";

$conn = mysqli_connect($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Error de conexion: " . $conn->connect_error);
}
?>
