import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdenConceptoDto } from './create-orden-concepto.dto';

export class UpdateOrdenConceptoDto extends PartialType(CreateOrdenConceptoDto) {}
