import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CriterionService } from './criterion.service';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Criterion')
@Controller('criterion')
export class CriterionController {
  constructor(private readonly criterionService: CriterionService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um critério.' })
  @ApiBody({ type: CreateCriterionDto })
  @ApiCreatedResponse({ description: 'Critério criado com sucesso.' })
  create(@Body() createCriterionDto: CreateCriterionDto) {
    return this.criterionService.create(createCriterionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os critérios' })
  findAll() {
    return this.criterionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um critério.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do critério.'
  })
  findOne(@Param('id') id: string) {
    return this.criterionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um critério.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do critério.'
  })
  update(@Param('id') id: string, @Body() updateCriterionDto: UpdateCriterionDto) {
    return this.criterionService.update(id, updateCriterionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um critério.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do critério.'
  })
  remove(@Param('id') id: string) {
    return this.criterionService.remove(id);
  }
}
