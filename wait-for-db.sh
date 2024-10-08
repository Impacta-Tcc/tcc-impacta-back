#!/bin/bash

# Aguarda até que o serviço de banco de dados esteja disponível
echo "Aguardando o banco de dados..."

# Repete o comando até que consiga se conectar ao banco de dados
until /opt/mssql-tools18/bin/sqlcmd -S db -U sa -P "@k]rHSdfbKW0" -Q "SELECT 1" -C &> /dev/null
do
  echo "Aguardando o SQL Server iniciar..."
  sleep 2
done

echo "Banco de dados está pronto. Iniciando a aplicação."
exec "$@"
