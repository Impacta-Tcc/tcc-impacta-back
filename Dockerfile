# Usar a imagem oficial do SQL Server
FROM mcr.microsoft.com/mssql/server:2019-latest

# Variáveis de ambiente obrigatórias
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=@k]rHSdfbKW0
ENV MSSQL_TCP_PORT=1433

WORKDIR /src

# Copiar o script de inicialização para o contêiner
COPY init-db.sql ./init-db.sql

# Script para rodar após o SQL Server iniciar
RUN (/opt/mssql/bin/sqlservr --accept-eula &) | grep -q "Service Broker manager has started"  &&  /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "@k]rHSdfbKW0" -C -i init-db.sql