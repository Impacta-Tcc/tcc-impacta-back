import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetCepByZipCodeUseCase } from '../../use-cases/factories/make-get-cep-by-zip-code-use-case'
import { makeSetCepHistoryUseCase } from '../../use-cases/factories/make-set-cep-history'
import type { TbHistoricoModel } from '../../repositories/viaCep-repository'
export async function getCepByZipCode(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  try {
    const paramSchema = z.object({
      cep: z.string()
    })

    const { cep } = paramSchema.parse(request.query)
    const getCepByZipCode = makeGetCepByZipCodeUseCase()

    const setCepHistory = makeSetCepHistoryUseCase()

    const camposObrigatorios = [
      'cep',
      'logradouro',
      'bairro',
      'localidade',
      'uf',
      'estado',
      'regiao'
    ];

   

    const cepInformations = await getCepByZipCode.execute(cep)

    if(cepInformations){
      // Verifica se algum campo obrigatório está vazio, null ou undefined
      for (const campo of camposObrigatorios) {
        if (!cepInformations[campo as keyof TbHistoricoModel]) {
          throw new Error(`O campo ${campo} é obrigatório e não pode ser vazio.`);
        }
      }

      setCepHistory.execute(
        {
          cep: cepInformations.cep,
          logradouro: cepInformations.logradouro,
          complemento: cepInformations.complemento,
          bairro: cepInformations.bairro,
          localidade: cepInformations.localidade,
          uf: cepInformations.uf,
          estado: cepInformations.estado,
          regiao: cepInformations.regiao
        }
      )  
      return await reply.status(200).send(cepInformations)
    }
  } catch (error) {
    throw error
  }
}