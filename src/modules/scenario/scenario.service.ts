import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { FindOneScenarioUseCase, ListScenarioRepositoryUseCase } from './use-cases';

@Injectable()
export class ScenarioService {

  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, private readonly listScenarioRepositoryUseCase: ListScenarioRepositoryUseCase, private readonly findOneScenarioRepositoryUseCase: FindOneScenarioUseCase) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioRepositoryUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneScenarioRepositoryUseCase.execute(id);
  }

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
