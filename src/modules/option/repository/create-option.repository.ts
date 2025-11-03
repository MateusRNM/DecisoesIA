import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateOptionDto } from "../dto/create-option.dto";

@Injectable()
export class CreateOptionRepository {
    constructor(private readonly prisma : PrismaService) {}

    async create(scenarioId: string, data: CreateOptionDto) {
        const option = await this.prisma.option.create({data: {
            ...data,
            scenarioId
        },
        include: {
            scores: {
                include: {
                    criterion: true
                }
            }
        }});
        return option;
    }
}   