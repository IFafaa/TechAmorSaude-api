CREATE TABLE techamorsaude.medical_specialties (
    id INT AUTO_INCREMENT PRIMARY KEY, label VARCHAR(100) NOT NULL
);

INSERT INTO
    techamorsaude.medical_specialties (label)
VALUES ('Cardiologia'),
    ('Pediatria'),
    ('Dermatologia'),
    ('Ortopedia'),
    ('Ginecologia'),
    ('Neurologia'),
    ('Oftalmologia'),
    ('Otorrinolaringologia'),
    ('Urologia'),
    ('Psiquiatria'),
    ('Endocrinologia'),
    ('Gastroenterologia');

CREATE TABLE techamorsaude.regions (
    id INT AUTO_INCREMENT PRIMARY KEY, label VARCHAR(100) NOT NULL
);

INSERT INTO
    techamorsaude.regions (label)
VALUES ('Alto tietê'),
    ('Interior'),
    ('ES'),
    ('SP Interior'),
    ('SP'),
    ('SP2'),
    ('MG'),
    ('Nacional'),
    ('SP CAV'),
    ('RJ'),
    ('SP2'),
    ('SP1'),
    ('NE1'),
    ('NE2'),
    ('SUL'),
    ('Norte');