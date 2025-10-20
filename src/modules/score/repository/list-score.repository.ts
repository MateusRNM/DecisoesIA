import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class ListScoreRepository {
    constructor(private readonly prisma: PrismaService) {}

    async list() {
        const score = await this.prisma.score.findMany({ include: { criterion: true, option: true }});
        return score;
    }
}