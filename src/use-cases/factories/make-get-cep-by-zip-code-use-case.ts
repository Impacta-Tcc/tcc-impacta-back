import { ViaCepService } from "../../services/implementations/viaCep-service";
import { GetCepByZipCodeUseCase } from "../get-cep-by-zip-code-use-case";

export function makeGetCepByZipCodeUseCase(): GetCepByZipCodeUseCase {
  const viaCepService = new ViaCepService()
  const getCepByZipCodeUseCase = new GetCepByZipCodeUseCase(viaCepService)
  return getCepByZipCodeUseCase
}