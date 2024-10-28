import { IsString, MinLength } from "class-validator";
import { IsDateFormat } from "src/common/decorators/is-date-format.decorator";
// import { Expedido } from "src/modules/ppe/usuarios/users/common/enums/expedido.enum";

export class FindPersonaDto {
    @IsString({ message: 'El CI debe ser de tipo texto' })
    @MinLength(6, { message: 'El CI debe contener al menos 6 caracteres' })
    ci: string;

    @IsString({ message: "La fecha de nacimiento es requerido" })
    @IsDateFormat()
    fecha_nac: Date;

    // @IsEnum(Expedido, { message: 'El expedido no es valido' })
    // expedido: Expedido;
}