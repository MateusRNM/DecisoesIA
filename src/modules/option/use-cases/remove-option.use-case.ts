import { Injectable, Logger } from "@nestjs/common";
import { RemoveOptionRepository } from "../repository";

@Injectable()
export class RemoveOptionUseCase {
    constructor(private readonly removeOptionRepository: RemoveOptionRepository, private readonly logger: Logger) {}

    async execute(id: string){
        try {
            const scenario = await this.removeOptionRepository.remove(id);
            return scenario;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}