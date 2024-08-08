import { ViacepResult, viaCepService } from "../viaCep-service";

export class InMemoryViaCepService implements viaCepService {
  public items: ViacepResult[] = []

  async getCepByZipCode(cep: string): Promise<ViacepResult[]> {
    return this.items
  }
}