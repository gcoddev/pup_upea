import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExtractoQrService } from './extracto-qr.service';
import { CreateExtractoQrDto } from './dto/create-extracto-qr.dto';
import { UpdateExtractoQrDto } from './dto/update-extracto-qr.dto';

@Controller('extracto-qr')
export class ExtractoQrController {
  constructor(private readonly extractoQrService: ExtractoQrService) {}

  @Post()
  create(@Body() createExtractoQrDto: CreateExtractoQrDto) {
    return this.extractoQrService.create(createExtractoQrDto);
  }

  @Get()
  findAll() {
    return this.extractoQrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extractoQrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExtractoQrDto: UpdateExtractoQrDto) {
    return this.extractoQrService.update(+id, updateExtractoQrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extractoQrService.remove(+id);
  }
}
