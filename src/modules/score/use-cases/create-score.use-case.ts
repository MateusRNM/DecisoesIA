import { Injectable, Logger } from "@nestjs/common";
import { CreateScoreDto } from "../dto/create-score.dto";
import { CreateScoreRepository } from "../repository";

@Injectable()
export class CreateScoreUseCase {
    constructor(private readonly scoreRepository: CreateScoreRepository, private readonly logger: Logger) {}

    async execute(data: CreateScoreDto) {
        try {
            const score = await this.scoreRepository.create(data);
            return score;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}