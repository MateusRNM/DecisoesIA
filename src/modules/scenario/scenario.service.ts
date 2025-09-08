import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { FindOneScenarioUseCase, ListScenarioRepositoryUseCase, RemoveScenarioUseCase, UpdateScenarioUseCase } from './use-cases';

@Injectable()
export class ScenarioService {

  constructor(
              private readonly createScenarioUseCase: CreateScenarioUseCase, 
              private readonly listScenarioRepositoryUseCase: ListScenarioRepositoryUseCase, 
              private readonly findOneScenarioRepositoryUseCase: FindOneScenarioUseCase,
              private readonly removeScenarioRepositoryUseCase: RemoveScenarioUseCase,
              private readonly updateScenarioRepositoryUseCase: UpdateScenarioUseCase
              ) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioRepositoryUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneScenarioRepositoryUseCase.execute(id);
  }

  update(id: string, dto: UpdateScenarioDto) {
    return this.updateScenarioRepositoryUseCase.execute(id, dto);
  }

  remove(id: string) {
    return this.removeScenarioRepositoryUseCase.execute(id);
  }
}
