import { IsString } from "class-validator";

export class CreateOptionDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    scenarioId: string;
    
    //scores: Score[]
}
