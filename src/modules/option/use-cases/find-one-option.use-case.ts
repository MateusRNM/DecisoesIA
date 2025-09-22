import { Injectable, Logger } from "@nestjs/common";
import { FindOneOptionRepository } from "../repository";

@Injectable()
export class FindOneOptionUseCase {
    constructor(private readonly findOneOptionRepository: FindOneOptionRepository, private readonly logger: Logger) {}

    async execute(id: string){
        try {
            const scenario = await this.findOneOptionRepository.getOne(id);
            return scenario;
        } catch(error){
            this.logger.error(error);
            throw error;
        }
    }
}