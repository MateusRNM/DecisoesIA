import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateScoreDto } from "../dto/update-score.dto";

@Injectable()
export class UpdateScoreRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: string, dto: UpdateScoreDto){
        const score = await this.prisma.score.update({ where: { id: id }, data: dto });
        return score;
    }
}