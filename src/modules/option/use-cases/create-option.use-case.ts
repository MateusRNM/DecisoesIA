import { Injectable, Logger } from "@nestjs/common";
import { CreateOptionRepository } from "../repository";
import { CreateOptionDto } from "../dto/create-option.dto";

@Injectable()
export class CreateOptionUseCase {
    constructor(private readonly optionRepository: CreateOptionRepository, private readonly logger: Logger) {}

    async execute(data: CreateOptionDto) {
        try {
            const scenario = await this.optionRepository.create(data);
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}