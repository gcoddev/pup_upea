import { IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { IsDateFormat } from "src/common/decorators/is-date-format.decorator";
import { Expedido } from "src/common/enums/expedido.enum";

export class CreatePersonaDto {
    @IsString()
    ci: string;

    @IsEnum(Expedido)
    expedido: Expedido;

    @IsString()
    @MinLength(3)
    nombres: string;

    @IsString()
    @MinLength(3)
    paterno: string;

    @IsString()
    @MinLength(3)
    materno: string;

    @IsDateFormat()
    fecha_nac: Date

    @IsString()
    @IsOptional()
    email?: string;
}