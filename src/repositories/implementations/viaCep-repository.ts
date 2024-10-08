import { sql } from "../../db";
import {viaCepRepository, TbHistoricoModel} from "../viaCep-repository";

export class ViaCepRepository implements viaCepRepository {
  async getHistoryCep(): Promise<TbHistoricoModel[]> {
    const response:any = await sql.query('SELECT * FROM tb_historico_cep');
    console.log(response.data)
    return response.data
  }
}