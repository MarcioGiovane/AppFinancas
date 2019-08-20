DROP DATABASE IF EXISTS `appfinancasdb`;

CREATE DATABASE `appfinancasdb`;

USE `appfinancasdb`;

DROP TABLE IF EXISTS `pessoa`;

CREATE TABLE `pessoa` (
  `pk_pessoa` INT(11) NOT NULL AUTO_INCREMENT,
  `tipo_pessoa` CHAR(2),
  `nome` VARCHAR(100) NOT NULL,
  `cpf` INT(11) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(12) NOT NULL,
  `corretora` VARCHAR(100),
  `data_nascimento` DATE NOT NULL,
  `tipo_investimento` VARCHAR(20) NOT NULL,
  `data_cadastro` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pk_pessoa`)
);

DROP TABLE IF EXISTS `transacao_investimento`;

CREATE TABLE `transacao_investimento` (
  `pk_transacao` int(11) NOT NULL AUTO_INCREMENT,
  `fk_pessoa` int(11) NOT NULL,
  `data_transacao` date NOT NULL DEFAULT NOW(),
  `ganho` decimal(10,2) NOT NULL DEFAULT '0.00',
  `contratos_mini_indice` int(5) NOT NULL DEFAULT '0',
  `contratos_mini_dolar` int(5) NOT NULL DEFAULT '0',
  `contratos_totais` int(5) NOT NULL DEFAULT '0',
  `iss` decimal(10,2) NOT NULL DEFAULT '0.00',
  `corretagem` decimal(10,2) NOT NULL DEFAULT '0.00',
  `taxa_registro_bmf` decimal(10,2) NOT NULL DEFAULT '0.00',
  `taxa_bmf` decimal(10,2) NOT NULL DEFAULT '0.00',
  `outras_taxas` decimal(10,2) NOT NULL DEFAULT '0.00',
  `gasto_total` decimal(10,2) NOT NULL DEFAULT '0.00',
  `liquido` decimal(10,2) NOT NULL DEFAULT '0.00',
  `liquido_contrato` decimal(10,2) NOT NULL DEFAULT '0.00',
  `ganho_gasto` decimal(10,2) NOT NULL DEFAULT '0.00',
  `ir_retido` decimal(10,2) NOT NULL DEFAULT '0.00',
  `gasto` decimal(10,2) NOT NULL DEFAULT '0.00',
  `ir_total` decimal(10,2) NOT NULL DEFAULT '0.00',
  `ir_devido` decimal(10,2) NOT NULL DEFAULT '0.00',
  `data_cadastro` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pk_transacao`),
  KEY `fk_pessoa_transacao_investimento` (`fk_pessoa`),
  CONSTRAINT `fk_pessoa_transacao_investimento` FOREIGN KEY (`fk_pessoa`) REFERENCES `pessoa` (`pk_pessoa`)
);
