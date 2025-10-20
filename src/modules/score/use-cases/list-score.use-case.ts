import { Injectable, Logger } from "@nestjs/common";
import { ListScoreRepository } from "../repository";

@Injectable()
export class ListScoreRepositoryUseCase {
    constructor(private readonly scoreRepository: ListScoreRepository, private readonly logger: Logger) {}

    async execute() {
        try {
            const score = await this.scoreRepository.list();
            return score;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}