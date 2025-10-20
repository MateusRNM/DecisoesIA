import { Injectable, Logger } from "@nestjs/common";
import { RemoveScoreRepository } from "../repository";

@Injectable()
export class RemoveScoreUseCase {
    constructor(private readonly removeScoreRepository: RemoveScoreRepository, private readonly logger: Logger) {}

    async execute(id: string){
        try {
            const score = await this.removeScoreRepository.remove(id);
            return score;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}