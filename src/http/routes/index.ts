import { FastifyInstance } from "fastify";
import { getCepByZipCode, getCepHistory } from "../controllers";

export async function appRoutes(app: FastifyInstance): Promise<void> {
  app.get('/consulta-cep', getCepByZipCode)
  app.get('/historico-cep', getCepHistory)
}