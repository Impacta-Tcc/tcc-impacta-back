import { env } from 'process';
import { app } from './app'
import { sql } from './db';

app.listen({
  host: env.API_host || "0.0.0.0",
  port: 7500
}).then(() => {
  console.log('Server listening on port 7500')
    sql
    .connect()
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.error("Database connection failed: ", err);
    });
})
