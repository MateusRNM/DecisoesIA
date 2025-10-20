import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class FindOneCriterionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getOne(id: string){
        const criterion = await this.prisma.criterion.findUnique({ where: { id: id }});
        return criterion;
    }
}