import { Type } from "class-transformer"
import { IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { IsDateFormat } from "src/common/decorators/is-date-format.decorator"
import { Estado } from "src/common/enums/estado.enum"
import { CreateConvocatoriaModalidadDto } from "../../convocatoria-modalidad/dto/create-convocatoria-modalidad.dto"

export class CreateConvocatoriaDto {
    @IsDateFormat()
    fecha_ini: Date

    @IsDateFormat()
    fecha_fin: Date

    // @IsString()
    @IsNumber()
    id_carrera: number

    @IsNumber()
    @IsOptional()
    id_usuario?: number

    // @IsString()
    @IsNumber()
    id_sede: number

    // @IsString()
    @IsNumber()
    id_gestion: number

    // @IsString()
    // @IsNumber()
    // id_modalidad: number
    @ValidateNested()
    @Type(() => CreateConvocatoriaModalidadDto)
    modalidad: CreateConvocatoriaModalidadDto[]

    @IsNumber()
    @IsOptional()
    id_concepto?: number

    // @IsString()
    @IsNumber()
    cupos: number

    // @IsString()
    @IsNumber()
    costo: number

    @IsString()
    @IsOptional()
    file?: string

    @IsEnum(Estado)
    @IsOptional()
    estado?: Estado
}
