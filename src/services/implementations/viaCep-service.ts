import axios from "axios";
import { ViacepResult, viaCepService } from "../viaCep-service";

export class ViaCepService implements viaCepService {
  async getCepByZipCode(cep: string): Promise<ViacepResult[]> {
    const Url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await axios.get<ViacepResult[]>(Url);
    return response.data
  }
}