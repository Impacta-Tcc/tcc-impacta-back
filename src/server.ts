import { app } from './app'
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

const pool = new ConnectionPool(config);
app.listen({
  host: '0.0.0.0',
  port: 7500
}).then(() => {
  console.log('Server listening on port 7500')
  pool
    .connect()
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.error("Database connection failed: ", err);
    });
})
