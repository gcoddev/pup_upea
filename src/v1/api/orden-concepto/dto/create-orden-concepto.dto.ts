import { IsDecimal, IsNumber, IsOptional } from "class-validator"
import { Orden } from "../../orden/entities/orden.entity"

export class CreateOrdenConceptoDto {
    @IsNumber()
    @IsOptional()
    orden?: Orden

    @IsNumber()
    id_concepto: number

    @IsNumber()
    id_tipo_medida: number

    @IsNumber()
    cantidad: number

    @IsDecimal()
    costo: number

    @IsNumber()
    id_moneda: number
}
