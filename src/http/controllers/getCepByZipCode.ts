import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetCepByZipCodeUseCase } from '../../use-cases/factories/make-get-cep-by-zip-code-use-case'
import { makeGetCepHistoryUseCase } from '../../use-cases/factories/make-get-cep-history'
export async function getCepByZipCode(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const paramSchema = z.object({
      cep: z.string()
    })

    const { cep } = paramSchema.parse(request.query)
    const getCepByZipCode = makeGetCepByZipCodeUseCase()

    const getCepHistory = makeGetCepHistoryUseCase()

    const cepInformations = await getCepByZipCode.execute(cep)

    console.log(cepInformations)
    console.log("BANCO:",getCepHistory)

    return await reply.status(200).send(cepInformations)
  } catch (error) {
    throw error
  }
}