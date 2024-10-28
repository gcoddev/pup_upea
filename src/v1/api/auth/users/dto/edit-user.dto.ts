import { IsEmail, IsEnum, IsNumber, IsOptional, IsString, MinLength } from "class-validator"
import { IsDateFormat } from "src/common/decorators/is-date-format.decorator"
import { Estado } from "src/common/enums/estado.enum"
import { Expedido } from "src/common/enums/expedido.enum"
import { Role } from "src/common/enums/auth/role.enum"

export class EditUserDto {
    @IsString()
    numeroDocumento: string

    @IsEnum(Expedido)
    expedido: Expedido

    @IsString()
    @MinLength(3)
    nombres: string

    @IsString()
    @MinLength(3)
    paterno: string

    @IsString()
    @MinLength(3)
    materno: string

    @IsDateFormat()
    fecha_nac: Date

    @IsEmail()
    email: string

    @IsString()
    @MinLength(4)
    username: string

    @IsNumber()
    @IsOptional()
    google_id?: string

    @IsEnum(Role)
    // @IsOptional()
    role: Role

    // @IsNumber()
    // @IsOptional()
    // idPersona?: number

    @IsNumber()
    id_persona: number

    @IsNumber()
    @IsOptional()
    id_carrera?: number

    @IsEnum(Estado)
    @IsOptional()
    estado: Estado
}
