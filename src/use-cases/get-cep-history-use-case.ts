import type { TbHistoricoModel, viaCepRepository } from "../repositories/viaCep-repository";

export class GetCepHistoryUseCase {
  constructor(private readonly viaCepRepository: viaCepRepository) { }
  async execute(): Promise<TbHistoricoModel[]> {
    const result = await this.viaCepRepository.getHistoryCep();
    return result
  }
} 