import { env } from 'process';
import { ConnectionPool } from "mssql";

const config = {
  user: "sa",
  password: "@k]rHSdfbKW0",
  server: env.DATABASE_HOST || "localhost", 
  database: "tcc-impacta",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

export const sql = new ConnectionPool(config);