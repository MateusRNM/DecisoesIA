import { Injectable, Logger } from "@nestjs/common";
import { UpdateCriterionRepository } from "../repository";
import { UpdateCriterionDto } from "../dto/update-criterion.dto";

@Injectable()
export class UpdateCriterionUseCase {
    constructor(private readonly updateCriterionRepository: UpdateCriterionRepository, private readonly logger: Logger) {}

    async execute(id: string, dto: UpdateCriterionDto){
        try {
            const criterion = await this.updateCriterionRepository.update(id, dto);
            return criterion;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}