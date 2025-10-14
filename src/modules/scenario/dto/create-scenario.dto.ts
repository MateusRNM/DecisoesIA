import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateScenarioDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Título do scenario'
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Descrição do scenario'
    })
    description: string;

    //options: Option[];
}
