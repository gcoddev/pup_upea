import { Injectable } from '@nestjs/common';
import { CreateExtractoQrDto } from './dto/create-extracto-qr.dto';
import { UpdateExtractoQrDto } from './dto/update-extracto-qr.dto';

@Injectable()
export class ExtractoQrService {
  create(createExtractoQrDto: CreateExtractoQrDto) {
    return 'This action adds a new extractoQr';
  }

  findAll() {
    return `This action returns all extractoQr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} extractoQr`;
  }

  update(id: number, updateExtractoQrDto: UpdateExtractoQrDto) {
    return `This action updates a #${id} extractoQr`;
  }

  remove(id: number) {
    return `This action removes a #${id} extractoQr`;
  }
}
