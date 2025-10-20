import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class RemoveScoreRepository {
    constructor(private readonly prisma: PrismaService) {}

    async remove(id: string){
        const score = await this.prisma.score.delete({ where: { id: id } });
        return score;
    }
}