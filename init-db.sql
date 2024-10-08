USE master;
GO

-- Criação do banco de dados, se não existir
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'tcc-impacta')
BEGIN
    CREATE DATABASE [tcc-impacta];
END
GO

USE [tcc-impacta];
GO

-- Criação da tabela tb_historico_cep, se não existir
IF NOT EXISTS (SELECT 1 
               FROM sys.objects 
               WHERE object_id = object_id('[dbo].[tb_historico_cep]') 
                 AND type = 'U')
BEGIN
    CREATE TABLE [dbo].[tb_historico_cep](
        [id_historico_cep] INT IDENTITY(1,1) NOT NULL,
        [cep] VARCHAR(15) NULL,
        [logradouro] VARCHAR(300) NULL,
        [complemento] VARCHAR(300) NULL,
        [bairro] VARCHAR(300) NULL,
        [localidade] VARCHAR(100) NULL,
        [uf] CHAR(2) NULL,
        [estado] VARCHAR(25) NULL,
        [regiao] VARCHAR(25) NULL,
        CONSTRAINT PK_tb_historico_cep PRIMARY KEY ([id_historico_cep])
    );
END
GO
