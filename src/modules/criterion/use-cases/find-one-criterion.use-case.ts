import { Injectable, Logger } from "@nestjs/common";
import { FindOneCriterionRepository } from "../repository";

@Injectable()
export class FindOneCriterionUseCase {
    constructor(private readonly findOneCriterionRepository: FindOneCriterionRepository, private readonly logger: Logger) {}

    async execute(id: string){
        try {
            const criterion = await this.findOneCriterionRepository.getOne(id);
            return criterion;
        } catch(error){
            this.logger.error(error);
            throw error;
        }
    }
}