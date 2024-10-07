# Procura CEP

Neste Projeto será possivel fazer busca de endereço de qualquer estado do Brasil.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 📋 Pré-requisitos

De que coisas você precisa para instalar o software ?

```
NodeJs
NPM

```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

###### Passo 1
```
[npm install]
```
---
###### Passo 2
```
[npm run dev]
```
---
###### Passo 3
```
Clique [Ctrl + localhost] no terminal
```
---
###### Passo 4
```
Pronto, uma API já está disponível para pesquisar CEP.
```
---

## 🚀 Utilizando SQL Server + Docker

### 📋 Pré-requisitos

```
Docker instalado na máquina

Conta no Docker Hub (opcional)
```
###### Passo 1

Baixar a imagem do SQL Server

Abra o terminal e execute o seguinte comando para baixar a imagem do SQL Server:
```
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

###### Passo 2
Criar e iniciar um contêiner do SQL Server

Após baixar a imagem, crie e inicie um contêiner utilizando o comando:

```
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=SuaSenhaForte123" \
   -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2019-latest
```
- ACCEPT_EULA=Y: Aceita os termos da licença.

- SA_PASSWORD: Define a senha do administrador do sistema (SA). Use uma senha forte!

- -p 1433:1433: Mapeia a porta 1433 do contêiner para a porta 1433 da máquina host.

- --name sqlserver: Nome do contêiner.

- -d: Executa o contêiner em segundo plano (detached mode).


###### Passo 3
Verificar se o contêiner está em execução

Execute o comando abaixo para verificar se o contêiner do SQL Server está em execução:

```
docker ps -a
```
Obs: - Você deverá ver o contêiner sqlserver em execução na lista de contêineres.


###### Passo 4
Conectar ao SQL Server no contêiner

Use uma ferramenta como o SQL Server Management Studio (SSMS) ou Azure Data Studio para conectar-se ao SQL Server em execução no Docker:

- Servidor: localhost

- Usuário: SA

- Senha: SuaSenhaForte123 (a senha definida no passo 2)


###### Passo 5
Parar e iniciar o contêiner

Para parar o contêiner, execute:

```
docker stop sqlserver
```

Para iniciar o contêiner novamente, execute:

```
docker start sqlserver
```
###### Passo 6
Remover o contêiner

Se você não precisar mais do contêiner, remova-o com o comando:

```
docker rm -f sqlserver

```
