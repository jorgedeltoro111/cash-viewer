<?php
include_once 'config.php';

// Registro de un usuario
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'registrarUsuario') {
    $numeroCelular = $_POST['numeroCelular'];
    $contrasenia = $_POST['contrasenia'];

    // Validación de los datos aquí

    $stmt = $conn->prepare("INSERT INTO usuario (contrasenia, numeroCelular) VALUES (?, ?)");
    $stmt->bind_param("ss", $contrasenia, $numeroCelular);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        $resultado = array("mensaje" => "Usuario agregado con exito", "id" => $conn->insert_id);
    } else {
        $resultado = array("mensaje" => "Error al intentar agregar usuario");
    }

    header('Content-Type: application/json');
    echo json_encode($resultado);
}

// Inicio de sesión
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['action'] === 'iniciarSesion') {
    $numeroCelular = $_GET['numeroCelular'];

    // Validación de los datos aquí

    $stmt = $conn->prepare("SELECT id FROM usuario WHERE numeroCelular = ?");
    $stmt->bind_param("s", $numeroCelular);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $resultado = array("mensaje" => "Inicio de sesión exitoso", "id" => $row['id']);
    } else {
        $resultado = array("mensaje" => "No se encontró ninguna cuenta");
    }

    header('Content-Type: application/json');
    echo json_encode($resultado);
}

// Actualizar datos de un usuario
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'actualizarUsuario') {
    $idUsuario = $_POST['idUsuario'];
    $nuevoCelular = $_POST['numeroCelular'];
    $nuevaContrasenia = $_POST['contrasenia'];

    // Validación de los datos aquí

    $stmt = $conn->prepare("UPDATE usuario SET numeroCelular = ?, contrasenia = ? WHERE id = ?");
    $stmt->bind_param("ssi", $nuevoCelular, $nuevaContrasenia, $idUsuario);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        $resultado = array("mensaje" => "Perfil actualizado con exito");
    } else {
        $resultado = array("mensaje" => "Error al intentar actualizar el perfil");
    }

    header('Content-Type: application/json');
    echo json_encode($resultado);
}
?>
