import { Injectable, Logger } from "@nestjs/common";
import { RemoveCriterionRepository } from "../repository";

@Injectable()
export class RemoveCriterionUseCase {
    constructor(private readonly removeCriterionRepository: RemoveCriterionRepository, private readonly logger: Logger) {}

    async execute(id: string){
        try {
            const criterion = await this.removeCriterionRepository.remove(id);
            return criterion;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}