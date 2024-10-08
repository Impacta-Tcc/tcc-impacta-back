import { ViaCepRepository } from "../../repositories/implementations/viaCep-repository"
import { GetCepHistoryUseCase } from "../get-cep-history-use-case"


export function makeGetCepHistoryUseCase(): GetCepHistoryUseCase {
  const viaCepRepository = new ViaCepRepository()
  const getCepByZipCodeUseCase = new GetCepHistoryUseCase(viaCepRepository)
  return getCepByZipCodeUseCase
}