import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepository } from "../repository";

@Injectable()
export class ListOptionRepositoryUseCase {
    constructor(private readonly optionRepository: ListOptionRepository, private readonly logger: Logger) {}

    async execute(scenarioId: string) {
        try {
            const option = await this.optionRepository.list(scenarioId);
            return option;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}