import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCriterionDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'nome do criterio'
    })
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'peso do criterio'
    })
    weight: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'estado do criterio'
    })
    active: boolean;

    //scores: Score[]
}
