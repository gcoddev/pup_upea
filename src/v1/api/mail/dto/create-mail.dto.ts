import { IsBoolean, IsEmail, IsOptional, IsString, ValidateNested } from "class-validator";
import { Orden } from "../../orden/entities/orden.entity";
import { IsDateFormat } from "src/common/decorators/is-date-format.decorator";
import { Type } from "class-transformer";

export class CreateMailDto {
    @IsEmail()
    to: string;

    @IsDateFormat()
    fecha: Date

    @IsString()
    subject: string;

    @IsString()
    content: string;

    @IsBoolean()
    @IsOptional()
    leido?: boolean;

    @IsDateFormat()
    @IsOptional()
    fechaLeido: Date;

    @ValidateNested()
    @IsOptional()
    @Type(() => Orden)
    orden: Orden
}
