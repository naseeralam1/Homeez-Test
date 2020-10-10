CREATE DATABASE homeez;

CREATE TABLE Quotation
(
    Q_ID SERIAL PRIMARY KEY,
    Quotation_Info VARCHAR(255),
    Quotation_Valid BOOLEAN DEFAULT TRUE
);