DROP SCHEMA IF EXISTS csci_final;
CREATE SCHEMA csci_final;
USE csci_final;
DROP DATABASE IF EXISTS housingApp;
CREATE DATABASE housingApp;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Listing;

CREATE TABLE Users(
	ID INT NOT NULL AUTO_INCREMENT,
    Email varchar(45) NOT NULL,
    Username varchar(45) NOT NULL,
    Password varchar(45) NOT NULL,
    PRIMARY KEY(ID)
);

CREATE TABLE Listing(
	ID INT PRIMARY KEY auto_increment,
	UserID INT NOT NULL,
	ListingName varchar(50) NOT NULL,
	Address varchar(100) NOT NULL, 
	SqFoot INT NOT NULL,
	Price Int NOT NULL,
	Description varchar(400) NOT NULL, 
	foreign key fk1(UserID) REFERENCES Users(ID)	
);
    

    