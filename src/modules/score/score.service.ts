import { Injectable } from '@nestjs/common';
import { CreateScoreUseCase, FindOneScoreUseCase, ListScoreRepositoryUseCase, RemoveScoreUseCase, UpdateScoreUseCase } from './use-cases';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';

@Injectable()
export class ScoreService {

  constructor(
    private readonly createScoreUseCase: CreateScoreUseCase,
    private readonly findOneScoreUseCase: FindOneScoreUseCase,
    private readonly listScoreUseCase: ListScoreRepositoryUseCase,
    private readonly removeScoreUseCase: RemoveScoreUseCase,
    private readonly updateScoreUseCase: UpdateScoreUseCase
  ) {}

  create(createScoreDto: CreateScoreDto) {
    return this.createScoreUseCase.execute(createScoreDto);
  }

  findAll() {
    return this.listScoreUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneScoreUseCase.execute(id);
  }

  update(id: string, updateScoreDto: UpdateScoreDto) {
    return this.updateScoreUseCase.execute(id, updateScoreDto);
  }

  remove(id: string) {
    return this.removeScoreUseCase.execute(id);
  }
}
