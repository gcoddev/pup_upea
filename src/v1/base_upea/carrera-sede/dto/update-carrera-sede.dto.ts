import { PartialType } from '@nestjs/mapped-types';
import { CreateCarreraSedeDto } from './create-carrera-sede.dto';

export class UpdateCarreraSedeDto extends PartialType(CreateCarreraSedeDto) {}
