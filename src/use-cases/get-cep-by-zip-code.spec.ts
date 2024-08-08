import { beforeEach, describe, expect, it } from "vitest"
import { InMemoryViaCepService } from "../services/in-memory/in-memory-viaCep-service"
import { ViacepResult } from "../services/viaCep-service"
import { GetCepByZipCodeUseCase } from "./get-cep-by-zip-code-use-case"

let viaCepService: InMemoryViaCepService
let sut: GetCepByZipCodeUseCase
let resultViaCep: ViacepResult

describe('Get CEP informations by ZipCode', () => {
  beforeEach(() => {
    viaCepService = new InMemoryViaCepService()
    sut = new GetCepByZipCodeUseCase(viaCepService)
    resultViaCep = {
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
    viaCepService.items.push(resultViaCep)
    const items = await sut.execute('01001000')
    expect(items).toHaveLength(1)
    expect(items).toEqual([resultViaCep])
  })
})