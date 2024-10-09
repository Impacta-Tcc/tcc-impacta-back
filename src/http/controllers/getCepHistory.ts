import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetCepHistoryUseCase } from '../../use-cases/factories/make-get-cep-history'
export async function getCepHistory(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {

    const getCepHistory = makeGetCepHistoryUseCase()

    const resultCepHistory = await getCepHistory.execute();

    return await reply.status(200).send(resultCepHistory);
  } catch (error) {
    throw error
  }
}