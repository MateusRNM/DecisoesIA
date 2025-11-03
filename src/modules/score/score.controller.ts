import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Score')
@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um score.' })
  @ApiBody({ type: CreateScoreDto })
  @ApiCreatedResponse({ description: 'Score criado com sucesso.' })
  create(@Body() createScoreDto: CreateScoreDto) {
    return this.scoreService.create(createScoreDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os scores.' })
  findAll() {
    return this.scoreService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um score.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do score.'
  })
  findOne(@Param('id') id: string) {
    return this.scoreService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um score.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do score.'
  })
  update(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto) {
    return this.scoreService.update(id, updateScoreDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um score.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do score.'
  })
  remove(@Param('id') id: string) {
    return this.scoreService.remove(id);
  }
}
