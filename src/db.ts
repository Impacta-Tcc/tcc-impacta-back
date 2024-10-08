import { env } from 'process';
import { ConnectionPool } from "mssql";

const config = {
  user: "sa",
  password: "@k]rHSdfbKW0",
  server: env.DATABASE_HOST, 
  database: "tcc-impacta",
  options: {
    encrypt: false,
    enableArithAbort: false,
  },
};

export const sql = new ConnectionPool(config);