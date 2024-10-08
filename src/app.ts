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
// Global Error Handler
app.setErrorHandler((err, _, reply) => {
  if (err instanceof ZodError) {
    return reply.status(400).send({ message: 'Validation error', issues: err.format() })
  }
  return reply.status(500).send({ message: 'Internal Server Error' })
})
