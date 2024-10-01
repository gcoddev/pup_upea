import { IsEnum, IsNumber, IsOptional, IsString, MinLength } from "class-validator"
import { Estado } from "src/common/enums/estado.enum"
import { Expedido } from "src/common/enums/expedido.enum"
import { Role } from "src/common/enums/role.enum"

export class CreateUserDto {
    @IsString()
    numeroDocumento: string

    @IsEnum(Expedido)
    expedido: Expedido

    @IsString()
    nombres: string

    @IsString()
    paterno: string

    @IsString()
    materno: string

    @IsString()
    email: string

    @IsString()
    username: string

    @IsString()
    @MinLength(5, { message: 'La contraseña debe tener como mínimo 5 caracteres' })
    password: string

    @IsNumber()
    @IsOptional()
    google_id?: string

    @IsEnum(Role)
    @IsOptional()
    role: Role

    @IsNumber()
    @IsOptional()
    idPersona?: number

    @IsNumber()
    @IsOptional()
    id_persona?: number

    @IsNumber()
    @IsOptional()
    id_carrera?: number

    @IsEnum(Estado)
    @IsOptional()
    estado: Estado
}
