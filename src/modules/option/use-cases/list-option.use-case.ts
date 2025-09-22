import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepository } from "../repository";

@Injectable()
export class ListOptionRepositoryUseCase {
    constructor(private readonly optionRepository: ListOptionRepository, private readonly logger: Logger) {}

    async execute() {
        try {
            const scenario = await this.optionRepository.list();
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}