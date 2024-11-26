import { PartialType } from '@nestjs/mapped-types';
import { CreateConvocatoriaModalidadDto } from './create-convocatoria-modalidad.dto';

export class UpdateConvocatoriaModalidadDto extends PartialType(CreateConvocatoriaModalidadDto) {}
