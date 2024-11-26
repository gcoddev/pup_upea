import { Module } from '@nestjs/common';
import { ExtractoQrService } from './extracto-qr.service';
import { ExtractoQrController } from './extracto-qr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtractoQr } from './entities/extracto-qr.entity';

@Module({
  controllers: [ExtractoQrController],
  providers: [ExtractoQrService],
  imports: [
    TypeOrmModule.forFeature([ExtractoQr])
  ]
})
export class ExtractoQrModule { }
