import { ViacepResult, viaCepService } from "../services/viaCep-service";

export class GetCepByZipCodeUseCase {
  constructor(private readonly viaCepService: viaCepService) { }
  async execute(cep: string): Promise<ViacepResult | null> {
    const result = await this.viaCepService.getCepByZipCode(cep);
    return result
  }
} 