import { IsEnum, IsNumber, IsOptional } from "class-validator"
import { IsDateFormat } from "src/common/decorators/is-date-format.decorator"
import { Estado } from "src/common/enums/estado.enum"

export class CreateConvocatoriaDto {
    @IsDateFormat()
    fecha_ini: Date

    @IsDateFormat()
    fecha_fin: Date

    @IsNumber()
    id_carrera: number

    @IsNumber()
    @IsOptional()
    id_usuario?: number

    @IsNumber()
    id_sede: number

    @IsNumber()
    id_gestion: number

    @IsNumber()
    @IsOptional()
    id_concepto?: number

    @IsNumber()
    cupos: number

    @IsEnum(Estado)
    @IsOptional()
    estado?: Estado
}
