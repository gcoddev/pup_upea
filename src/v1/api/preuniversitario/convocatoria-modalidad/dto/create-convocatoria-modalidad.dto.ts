import { IsNumber, IsOptional, ValidateNested } from "class-validator"
import { Convocatoria } from "../../convocatoria/entities/convocatoria.entity"
import { Type } from "class-transformer"

export class CreateConvocatoriaModalidadDto {
    @IsNumber()
    id_modalidad: number

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => Convocatoria)
    convocatoria: Convocatoria
}
