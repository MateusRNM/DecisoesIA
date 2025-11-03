import { Injectable, Logger } from "@nestjs/common";
import { CreateOptionRepository } from "../repository";
import { CreateOptionDto } from "../dto/create-option.dto";

@Injectable()
export class CreateOptionUseCase {
    constructor(private readonly optionRepository: CreateOptionRepository, private readonly logger: Logger) {}

    async execute(scenarioId: string, data: CreateOptionDto) {
        try {
            const option = await this.optionRepository.create(scenarioId, data);
            return option;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}