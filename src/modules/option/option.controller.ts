import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Option')
@Controller('option')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Post('scenarios/:scenarioId/options')
  @ApiOperation({ summary: 'Cria uma opção vinculada a um cenário.' })
  @ApiParam({
    name: 'scenarioId',
    description: 'Identificador do cenário ao qual a opção pertence.'
  })
  @ApiBody({ type: CreateOptionDto })
  @ApiCreatedResponse({ description: 'Opção criada com sucesso.' })
  create(@Param('scenarioId') scenarioId: string, @Body() createOptionDto: CreateOptionDto) {
    return this.optionService.create(scenarioId, createOptionDto);
  }

  @Get('scenarios/:scenarioId/options')
  @ApiOperation({ summary: 'Lista as opções de um cenário.' })
  @ApiParam({
    name: 'scenarioId',
    description: 'Identificador do cenário ao qual a opção pertence.'
  })
  findAll(@Param('scenarioId') scenarioId: string) {
    return this.optionService.findAll(scenarioId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um cenário.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador da opção.'
  })
  findOne(@Param('id') id: string) {
    return this.optionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um cenário.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador da opção.'
  })
  update(@Param('id') id: string, @Body() updateOptionDto: UpdateOptionDto) {
    return this.optionService.update(id, updateOptionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um cenário.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador da opção.'
  })
  remove(@Param('id') id: string) {
    return this.optionService.remove(id);
  }
}
