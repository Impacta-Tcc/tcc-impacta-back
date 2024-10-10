# Procura CEP

Neste Projeto será possivel fazer busca de endereço de qualquer estado do Brasil.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 📋 Pré-requisitos

De que coisas você precisa para instalar o software ?

```
NodeJs
NPM
Docker
```

## 🚀 Docker + imagem Sql server

### 📋 Pré-requisitos

```
Docker instalado na máquina
- https://docs.docker.com/desktop/install/windows-install/
```
#### Passo 1
Criação de build das imagens para a API e banco + subida de containers, executando o comando abaixo
```
npm run buid:api
npm run buid:containers
```

#### Passo 2
Verificar se os contêiners estão em execução

```
docker ps -a
```
Obs: - Você deverá ver o contêiner sqlserver em execução na lista de contêineres.


#### Passo 3
Conectar ao SQL Server no contêiner

Use uma ferramenta como o SQL Server Management Studio (SSMS) ou Azure Data Studio para conectar-se ao SQL Server em execução no Docker:

- Servidor: localhost,1433

- Usuário: SA

- Senha: @k]rHSdfbKW0

**Senha** definida dentro do container

#### Passo 4
Parar e iniciar o contêiner

Para parar o contêiner, execute:

```
docker stop <nome_container>
```

Para iniciar o contêiner novamente, execute:

```
docker start <nome_container>
```
#### Passo 5
Remover o contêiner

Se você não precisar mais do contêiner, remova-o com o comando:

```
docker rm -f <nome_container>
```

## 🚀 Criar procedures

Execute os scritps encontrados na pasta /src/db na sequência:
```
1. inserir_historico.sql
2. consulta_historico.sql
```
### 🔧 Instalação dependências isoladas

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

#### Passo 1
```
[npm install]
```
---
#### Passo 2
```
[npm run dev]
```
---
#### Passo 3
```
Clique [Ctrl + localhost] no terminal
```
---
#### Passo 4
```
Pronto, uma API já está disponível para pesquisar CEP.
```
---
