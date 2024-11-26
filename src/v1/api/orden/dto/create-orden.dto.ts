import { ArrayMinSize, IsArray, IsDecimal, IsEnum, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { IsDateFormat } from "src/common/decorators/is-date-format.decorator";
import { EstadoPago } from "src/common/enums/estado-pago.enum";
import { Type } from "class-transformer";
import { User } from "../../auth/users/entities/user.entity";
import { CreateOrdenConceptoDto } from "../../orden-concepto/dto/create-orden-concepto.dto";
import { Persona } from "../../preuniversitario/personas/entities/persona.entity";
import { CreatePersonaDto } from "../../preuniversitario/personas/dto/create-persona.dto";

export class CreateOrdenDto {
    @IsString()
    descripcion: string;

    @IsString()
    @IsOptional()
    codigoOrden: string;

    @IsString()
    @IsOptional()
    codigoTransaccion: string
    // codigoTransaccion === codigoSeguimiento

    @IsEnum(EstadoPago)
    @IsOptional()
    estadoPago?: EstadoPago;

    @IsDecimal()
    subTotal: number;

    @IsDecimal()
    comision: number;

    @IsDecimal()
    montoTotal: number;

    @IsNumber()
    id_moneda: number;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreatePersonaDto)
    persona?: CreatePersonaDto;

    // @IsOptional()
    // @ValidateNested()
    // @Type(() => User)
    // user?: User;

    @IsString()
    @IsOptional()
    ip?: string;

    @IsString()
    @IsOptional()
    notaAdicional?: string;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateOrdenConceptoDto)
    ordenConcepto: CreateOrdenConceptoDto[];

    @IsOptional()
    @IsNumber()
    idConvocatoria: number

    @IsOptional()
    @IsDateFormat()
    modificadoEl: Date
}
