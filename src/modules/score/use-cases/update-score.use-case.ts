import { Injectable, Logger } from "@nestjs/common";
import { UpdateScoreRepository } from "../repository";
import { UpdateScoreDto } from "../dto/update-score.dto";

@Injectable()
export class UpdateScoreUseCase {
    constructor(private readonly updateScoreRepository: UpdateScoreRepository, private readonly logger: Logger) {}

    async execute(id: string, dto: UpdateScoreDto){
        try {
            const score = await this.updateScoreRepository.update(id, dto);
            return score;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}