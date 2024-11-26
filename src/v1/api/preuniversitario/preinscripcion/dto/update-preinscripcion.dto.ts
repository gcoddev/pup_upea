import { PartialType } from '@nestjs/mapped-types';
import { CreatePreinscripcionDto } from './create-preinscripcion.dto';

export class UpdatePreinscripcionDto extends PartialType(CreatePreinscripcionDto) {}
