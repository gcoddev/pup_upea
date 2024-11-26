import { PartialType } from '@nestjs/mapped-types';
import { CreateExtractoQrDto } from './create-extracto-qr.dto';

export class UpdateExtractoQrDto extends PartialType(CreateExtractoQrDto) {}
