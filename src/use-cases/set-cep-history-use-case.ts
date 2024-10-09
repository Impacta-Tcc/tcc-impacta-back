import type { TbHistoricoModel, viaCepRepository } from "../repositories/viaCep-repository";

export class SetCepHistoryUseCase {
  constructor(private readonly viaCepRepository: viaCepRepository) { }
  async execute(tbHistoricoModel:TbHistoricoModel){
    await this.viaCepRepository.inserirHistoryCep(tbHistoricoModel);
  }
} 