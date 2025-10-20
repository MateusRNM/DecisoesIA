import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class RemoveCriterionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async remove(id: string){
        const criterion = await this.prisma.criterion.delete({ where: { id: id } });
        return criterion;
    }
}