import { ViacepResult, viaCepService } from "../viaCep-service";

export class InMemoryViaCepService implements viaCepService {
  public items: ViacepResult = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
    estado: "",
    regiao: ""
  }

  async getCepByZipCode(cep: string): Promise<ViacepResult> {
    return this.items
  }
}