import cors from '@fastify/cors';
import fastify from 'fastify';
import { ZodError } from 'zod';
import { appRoutes } from './http/routes';

export const app = fastify()

app.register(appRoutes)

app.register(cors, {
  origin: '*',
  methods: ['GET']
})


import { ConnectionPool } from "mssql";

const config = {
  user: "sa",
  password: "@k]rHSdfbKW0",
  server: "localhost,1433",
  database: "tcc-impacta",
  options: {
    encrypt: false,
    enableArithAbort: false,
  },
};

const pool = new ConnectionPool(config);

pool
  .connect()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Database connection failed: ", err);
  });

app.setErrorHandler((err, _, reply) => {
  if (err instanceof ZodError) {
    return reply.status(400).send({ message: 'Validation error', issues: err.format() })
  }
  return reply.status(500).send({ message: 'Internal Server Error' })
})