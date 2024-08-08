import { FastifyInstance } from "fastify";
import { getCepByZipCode } from "../controllers";

export async function appRoutes(app: FastifyInstance): Promise<void> {
  app.get('/consulta-cep', getCepByZipCode)
}