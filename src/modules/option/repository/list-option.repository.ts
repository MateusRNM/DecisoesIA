import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class ListOptionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async list(scenarioId: string) {
        const option = await this.prisma.option.findMany({ where: {
            scenarioId: scenarioId
        }, 
        include: { 
            scenario: true 
        }});
        return option;
    }
}