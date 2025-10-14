import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateOptionDto {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nome da opção'
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Descrição da opção'
    })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Id do scenário correspondente'
    })
    scenarioId: string;
    
    //scores: Score[]
}
