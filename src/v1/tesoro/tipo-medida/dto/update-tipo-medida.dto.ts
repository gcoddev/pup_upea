import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoMedidaDto } from './create-tipo-medida.dto';

export class UpdateTipoMedidaDto extends PartialType(CreateTipoMedidaDto) {}
