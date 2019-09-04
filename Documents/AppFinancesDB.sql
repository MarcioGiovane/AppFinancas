DROP DATABASE IF EXISTS `appfinancesdb`;

CREATE DATABASE `appfinancesdb`;

USE `appfinancesdb`;

DROP TABLE IF EXISTS `client`;

CREATE TABLE `client` (
  `pk_client` INT(11) NOT NULL AUTO_INCREMENT,  
  `name` VARCHAR(50) NOT NULL,
  `cpf` INT(11) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,      
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pk_client`)
);

DROP TABLE IF EXISTS `financial_transaction`;

CREATE TABLE `financial_transaction` (
  `pk_transaction` int(11) NOT NULL AUTO_INCREMENT,
  `fk_client` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT NOW(),
  `gain` decimal(10,2) NOT NULL DEFAULT '0.00',
  `mini_index_contract` int(5) NOT NULL DEFAULT '0',
  `mini_dollar_contract` int(5) NOT NULL DEFAULT '0',
  `mini_contract_totals` int(5) NOT NULL DEFAULT '0',
  `iss` decimal(10,2) NOT NULL DEFAULT '0.00',
  `broking` decimal(10,2) NOT NULL DEFAULT '0.00',
  `bmf_registration_fee` decimal(10,2) NOT NULL DEFAULT '0.00',
  `bmf_rate` decimal(10,2) NOT NULL DEFAULT '0.00',
  `other_taxes` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total_spend` decimal(10,2) NOT NULL DEFAULT '0.00',
  `liquid` decimal(10,2) NOT NULL DEFAULT '0.00',
  `net_contract` decimal(10,2) NOT NULL DEFAULT '0.00',
  `gain_spent` decimal(10,2) NOT NULL DEFAULT '0.00',
  `ir` decimal(10,2) NOT NULL DEFAULT '0.00',
  `spent` decimal(10,2) NOT NULL DEFAULT '0.00',
  `ir_total` decimal(10,2) NOT NULL DEFAULT '0.00',
  `ir_due` decimal(10,2) NOT NULL DEFAULT '0.00',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pk_transaction`),
  KEY `fk_client_financial_transaction` (`fk_client`),
  CONSTRAINT `fk_client_financial_transaction` FOREIGN KEY (`fk_client`) REFERENCES `client` (`pk_client`)
);
