import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, FindOneOptionUseCase, ListOptionRepositoryUseCase, RemoveOptionUseCase, UpdateOptionUseCase } from './use-cases';

@Injectable()
export class OptionService {

  constructor(
    private readonly createOptionUseCase: CreateOptionUseCase,
    private readonly findOneOptionUseCase: FindOneOptionUseCase,
    private readonly listOptionUseCase: ListOptionRepositoryUseCase,
    private readonly removeOptionUseCase: RemoveOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase
  ) {}

  create(createOptionDto: CreateOptionDto) {
    return this.createOptionUseCase.execute(createOptionDto);
  }

  findAll() {
    return this.listOptionUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneOptionUseCase.execute(id);
  }

  update(id: string, updateOptionDto: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, updateOptionDto);
  }

  remove(id: string) {
    return this.removeOptionUseCase.execute(id);
  }
}
