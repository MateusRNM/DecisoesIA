import { Logger, Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModules } from 'src/shared/shared.module';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModules],
  controllers: [ScoreController],
  providers: [ScoreService, ...useCases, ...repositories, Logger],
})
export class ScoreModule {}
