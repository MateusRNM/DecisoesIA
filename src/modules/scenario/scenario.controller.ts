import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Scenario')
@Controller('scenario')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um cenário.' })
  @ApiBody({ type: CreateScenarioDto })
  @ApiCreatedResponse({ description: 'Cenário criado com sucesso.' })
  create(@Body() createScenarioDto: CreateScenarioDto) {
    return this.scenarioService.create(createScenarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os cenários.' })
  findAll() {
    return this.scenarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um cenário.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do cenário.'
  })
  findOne(@Param('id') id: string) {
    return this.scenarioService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um cenário.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do cenário.'
  })
  update(@Param('id') id: string, @Body() updateScenarioDto: UpdateScenarioDto) {
    return this.scenarioService.update(id, updateScenarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um cenário.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do cenário.'
  })
  remove(@Param('id') id: string) {
    return this.scenarioService.remove(id);
  }
}
