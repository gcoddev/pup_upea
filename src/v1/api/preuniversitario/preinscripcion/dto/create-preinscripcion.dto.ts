import { Type } from "class-transformer"
import { ValidateNested } from "class-validator"
import { IsDateFormat } from "src/common/decorators/is-date-format.decorator"
import { Persona } from "../../personas/entities/persona.entity"
import { Convocatoria } from "../../convocatoria/entities/convocatoria.entity"
import { Orden } from "src/v1/api/orden/entities/orden.entity"

export class CreatePreinscripcionDto {
    // @IsDateFormat()
    // fecha: Date

    @ValidateNested()
    @Type(() => Persona)
    persona: Persona

    @ValidateNested()
    @Type(() => Convocatoria)
    convocatoria: Convocatoria

    @ValidateNested()
    @Type(() => Orden)
    orden: Orden
}

