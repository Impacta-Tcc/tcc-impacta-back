import { beforeEach, describe, expect, it } from "vitest"
import { InMemoryViaCepRepository } from "../repositories/in-memory/in-memory-viaCep-repository"
import { GetCepHistoryUseCase } from "./get-cep-history-use-case"
import { TbHistoricoModel } from "../repositories/viaCep-repository"

let viaCepRepository: InMemoryViaCepRepository
let sut: GetCepHistoryUseCase
let tbHistoricoModel: TbHistoricoModel[]

describe('Get CEP informations history', () => {
  beforeEach(() => {
    viaCepRepository = new InMemoryViaCepRepository()
    sut = new GetCepHistoryUseCase(viaCepRepository)
    tbHistoricoModel.at[0] = {
      cep: "01001-000",
      logradouro: "Praça da Sé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107"
    }
  })

  it('Should be able to get CEP informations by consulting the ZipCode', async () => {
    viaCepRepository.items.push(tbHistoricoModel[0])
    const items = await sut.execute()
    expect(items).toHaveLength(1)
    expect(items).toEqual([tbHistoricoModel])
  })
})