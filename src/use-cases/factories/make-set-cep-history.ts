import { ViaCepRepository } from "../../repositories/implementations/viaCep-repository"
import { SetCepHistoryUseCase } from "../set-cep-history-use-case"


export function makeSetCepHistoryUseCase(): SetCepHistoryUseCase {
  const viaCepRepository = new ViaCepRepository()
  const setCepHistoryUseCase = new SetCepHistoryUseCase(viaCepRepository)
  return setCepHistoryUseCase
}