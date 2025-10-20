import { Injectable, Logger } from "@nestjs/common";
import { ListCriterionRepository } from "../repository";

@Injectable()
export class ListCriterionRepositoryUseCase {
    constructor(private readonly criterionRepository: ListCriterionRepository, private readonly logger: Logger) {}

    async execute() {
        try {
            const criterion = await this.criterionRepository.list();
            return criterion;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}