import { app } from './app'
import { sql } from './db';

app.listen({
  host: 'api',
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
