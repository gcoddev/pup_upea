import { PartialType } from '@nestjs/mapped-types';
import { CreateExtractoDto } from './create-extracto.dto';

export class UpdateExtractoDto extends PartialType(CreateExtractoDto) {}
