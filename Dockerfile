# Usar a imagem oficial do SQL Server
FROM mcr.microsoft.com/mssql/server:2019-latest

USER root

COPY init-db.sql ./init-db.sql

# Variáveis de ambiente obrigatórias
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=@k]rHSdfbKW0

# Iniciar o SQL Server e rodar o script init-db.sql
RUN (/opt/mssql/bin/sqlservr --accept-eula &) | grep -q "Service Broker manager has started"  && sleep 2s && /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "@k]rHSdfbKW0" -d master -C -i init-db.sql

# Instalar Node.js e utilitários adicionais
RUN apt-get -y update  && \
        apt-get install -y curl && \
        apt-get install -y iputils-ping &&\
        curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
        apt-get install -y nodejs

WORKDIR /dist

# Copiar o diretório dist para dentro do container
COPY /dist ./ 

# Copiar o package.json para dentro do container e instalar as dependências
COPY package.json ./package.json
RUN npm install

# Copiar o script de espera e torná-lo executável
COPY wait-for-db.sh ./wait-for-db.sh
RUN chmod +x wait-for-db.sh

EXPOSE 7500
EXPOSE 1433
