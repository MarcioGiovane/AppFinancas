DROP DATABASE IF EXISTS 'appfinancasdb';

CREATE DATABASE 'appfinancasdb';


DROP TABLE IF EXISTS 'pessoa';

CREATE TABLE 'pessoa' (

pk_pessoa int(11) NOT NULL AUTO_INCREMENT,
tipo_pessoa char(2),
nome varchar(100) NOT NULL,
cpf int(11) NOT NULL,
email varchar(50) NOT NULL,
password varchar(12) NOT NULL,
corretora varchar(100),
data_nascimento date NOT NULL DEFAULT '0000-00-00',
tipo_investimento varchar(20) NOT NULL,
data_cadastro datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
data_atualizacao datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
PRIMARY KEY ('pk_pessoa')
);

DROP TABLE IF EXISTS 'transacao_investimento';

CREATE TABLE 'transacao_investimento' (
pk_transacao int(11) NOT NULL AUTO_INCREMENT,
fk_pessoa int(11) NOT NULL,
data_transacao date NOT NULL DEFAULT '0000-00-00',
ganho decimal(10,2) NOT NULL DEFAULT '0.00',
Contratos_mini_indice int(5) NOT NULL DEFAULT '0',
contratos_mini_dolar int(5) NOT NULL DEFAULT '0',
contratos_totais int(5) NOT NULL DEFAULT '0',
iss decimal(10,2) NOT NULL DEFAULT '0.00',
corretagem decimal(10,2) NOT NULL DEFAULT '0.00',
taxa_registro_bmf decimal(10,2) NOT NULL DEFAULT '0.00',
taxa_bmf decimal(10,2) NOT NULL DEFAULT '0.00',
outras_taxas decimal(10,2) NOT NULL DEFAULT '0.00',
gasto_total decimal(10,2) NOT NULL DEFAULT '0.00',
liquido decimal(10,2) NOT NULL DEFAULT '0.00',
liquido_contrato decimal(10,2) NOT NULL DEFAULT '0.00',
ganho_gasto decimal(10,2) NOT NULL DEFAULT '0.00',
ir_retido decimal(10,2) NOT NULL DEFAULT '0.00',
gasto decimal(10,2) NOT NULL DEFAULT '0.00',
ir_total decimal(10,2) NOT NULL DEFAULT '0.00',
ir_devido decimal(10,2) NOT NULL DEFAULT '0.00',
data_cadastro datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
data_atualizacao datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
PRIMARY KEY ('pk_pessoa'),
KEY 'fk_pessoa_transacao_investimento' ('fk_pessoa'),
CONSTRAINT 'fk_pessoa_transacao_investimento' FOREIGN KEY ('fk_pessoa') REFERENCES 'pessoa' ('pk_pessoa')
);
