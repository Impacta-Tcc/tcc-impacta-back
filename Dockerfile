# Usar a imagem oficial do SQL Server
FROM mcr.microsoft.com/mssql/server:2019-latest

USER root

COPY init-db.sql ./init-db.sql

# Variáveis de ambiente obrigatórias
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=@k]rHSdfbKW0

RUN (/opt/mssql/bin/sqlservr --accept-eula &) | grep -q "Service Broker manager has started"  && sleep 90s && /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "@k]rHSdfbKW0" -d master -C -i init-db.sql

RUN apt-get -y update  && \
        apt-get install -y curl && \
        curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
        apt-get install -y nodejs && \
        apt-get install -y dos2unix

WORKDIR /dist

COPY /dist ./ 

COPY package.json ./package.json

RUN npm install

EXPOSE 7500
EXPOSE 1433
