import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateScoreDto } from "../dto/create-score.dto";

@Injectable()
export class CreateScoreRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateScoreDto) {
        const score = await this.prisma.score.create({data});
        return score;
    }
}   