export interface TbHistoricoModel {
  cep: string,
  logradouro: string,
  complemento?: string,
  bairro: string,
  localidade: string,
  uf: string,
  estado: string,
  regiao: string,
}

export interface viaCepRepository {
  getHistoryCep: () => Promise<TbHistoricoModel[]>
  inserirHistoryCep: (historicoCEP: TbHistoricoModel) => Promise<any>
}