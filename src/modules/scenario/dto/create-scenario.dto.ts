import { IsString } from "class-validator";

export class CreateScenarioDto {
    @IsString()
    title: string;

    @IsString()
    description: string;
    
    //options: Option[];
}
