import { sql } from "../../db";
import { viaCepRepository, TbHistoricoModel } from "../viaCep-repository";

export class ViaCepRepository implements viaCepRepository {
  async getHistoryCep(): Promise<TbHistoricoModel[]> {
    const response= (await sql.request().execute('consulta_historico')).recordset;
    console.log(response)
    return response
  }
  async inserirHistoryCep(historicoCEP: TbHistoricoModel) {
    await sql.request()
      .input('cep',historicoCEP.cep)
      .input('logradouro',historicoCEP.logradouro)
      .input('complemento',historicoCEP.complemento)
      .input('bairro',historicoCEP.bairro)
      .input('localidade',historicoCEP.localidade)
      .input('uf',historicoCEP.uf)
      .input('estado',historicoCEP.estado)
      .input('regiao',historicoCEP.regiao)
      .execute('inserir_historico')
  }
}