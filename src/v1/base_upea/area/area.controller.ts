import { Controller, Get, Post, Body, Patch, Param, Delete, Version, UseGuards } from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { ApiKeyGuard } from 'src/v1/api/auth/guard/api-key.guard';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) { }

  @Post()
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.areaService.create(createAreaDto);
  }

  @Get()
  @Version('1')
  @UseGuards(ApiKeyGuard)
  findAll() {
    return this.areaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.areaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areaService.update(id, updateAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.areaService.remove(id);
  }
}
