import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateScoreDto {
        
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID da opção'
    })
    optionId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID do critério'
    })
    criterionId: string;
    
    //option: Option[]
    //criterion: Criterion[]
}
