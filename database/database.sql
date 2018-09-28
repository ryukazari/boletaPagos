CREATE DATABASE recursoshumanos;
USE recursoshumanos;

CREATE TABLE trabajador(
	id INT(4) AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(200) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    sueldo  FLOAT NOT NULL    
);

CREATE TABLE horastrabajo(
	id INT(4) AUTO_INCREMENT PRIMARY KEY,
    horas FLOAT NOT NULL,
    fecha VARCHAR(10) NOT NULL,
    idtrabajador INT(4),
    FOREIGN KEY (idtrabajador) REFERENCES trabajador(id)
);

CREATE TABLE boletapago(
	id INT(4) AUTO_INCREMENT PRIMARY KEY,
	monto FLOAT NOT NULL,
    idtrabajador INT(4),
    FOREIGN KEY (idtrabajador) REFERENCES trabajador(id)
);

INSERT INTO trabajador (nombre, cargo, sueldo)
VALUES 	('Jeferson Gutierritos','Probador de Calidad',40),
		('Jorge Yakitori','Programador Junior',30),
        ('Carlitos Finster','Programador Senior',50),
        ('Hector Father','Arquitecto de Software',50),
        ('Roggo Muito','Gerente de proyecto',60),
        ('Daniel Betel','Practicante',20);