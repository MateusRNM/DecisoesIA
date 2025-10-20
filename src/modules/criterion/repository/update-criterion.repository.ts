import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateCriterionDto } from "../dto/update-criterion.dto";

@Injectable()
export class UpdateCriterionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: string, dto: UpdateCriterionDto){
        const criterion = await this.prisma.criterion.update({ where: { id: id }, data: dto });
        return criterion;
    }
}