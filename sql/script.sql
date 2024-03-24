CREATE DATABASE cashviewer;

USE cashviewer;

CREATE TABLE usuario (

    idUsuario INTEGER PRIMARY KEY AUTO_INCREMENT,

    contrasenia VARCHAR(30) NOT NULL UNIQUE,

    numeroCelular INTEGER NOT NULL UNIQUE

);

CREATE TABLE ingreso (

    idIngreso INTEGER PRIMARY KEY AUTO_INCREMENT,

    idUsuario INTEGER,

    concepto DECIMAL(10,2) NOT NULL,

    monto DECIMAL(10,2) NOT NULL,

    fecha TIMESTAMP NOT NULL,

    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)

);

CREATE TABLE gasto (

    idGasto INTEGER PRIMARY KEY AUTO_INCREMENT,

    idUsuario INTEGER,

    concepto DECIMAL(10,2) NOT NULL,

    monto DECIMAL(10,2) NOT NULL,

    fecha TIMESTAMP NOT NULL,

    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)

);