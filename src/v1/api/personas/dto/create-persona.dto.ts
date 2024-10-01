import { IsEnum, IsOptional, IsString } from "class-validator";
import { Expedido } from "src/common/enums/expedido.enum";

export class CreatePersonaDto {
    @IsString()
    ci: string;

    @IsEnum(Expedido)
    expedido: Expedido;

    @IsString()
    nombres: string;

    @IsString()
    paterno: string;

    @IsString()
    materno: string;

    @IsString()
    email: string;
}