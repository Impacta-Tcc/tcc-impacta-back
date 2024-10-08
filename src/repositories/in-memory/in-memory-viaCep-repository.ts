import {TbHistoricoModel, viaCepRepository} from '../viaCep-repository';

export class InMemoryViaCepRepository implements viaCepRepository {
  public items: TbHistoricoModel[] = []
  
  async getHistoryCep(): Promise<TbHistoricoModel[]>{
    return this.items
  }
}