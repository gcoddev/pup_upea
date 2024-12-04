import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Req, Put, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ConvocatoriaService } from './convocatoria.service';
import { CreateConvocatoriaDto } from './dto/create-convocatoria.dto';
import { UpdateConvocatoriaDto } from './dto/update-convocatoria.dto';
import { Request } from 'express'
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/auth/role.enum';
import { ApiKeyGuard } from 'src/v1/api/auth/guard/api-key.guard';
import { fileUploadInterceptor } from 'src/common/interceptors/file-upload.interceptor';

@Controller('convocatoria')
export class ConvocatoriaController {
  constructor(private readonly convocatoriaService: ConvocatoriaService) { }

  @Post()
  @Version('1')
  @Auth(Role.TEC)
  @UseInterceptors(fileUploadInterceptor('file', 'convocatorias'))
  create(
    @Body() createConvocatoriaDto: CreateConvocatoriaDto,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request
  ) {
    const filePath = file ? `uploads/convocatorias/${file.filename}` : null;
    return this.convocatoriaService.create(createConvocatoriaDto, filePath, req);
  }

  @Get()
  @Version('1')
  @Auth(Role.TEC)
  findAll(@Req() req: Request) {
    return this.convocatoriaService.findAll(req);
  }

  @Get('pre')
  @Version('1')
  @UseGuards(ApiKeyGuard)
  findAllPre() {
    return this.convocatoriaService.findAllPre();
  }

  @Get(':id')
  @Version('1')
  findOne(@Param('id') id: number) {
    return this.convocatoriaService.findOne(id);
  }

  @Put(':id')
  @Version('1')
  @Auth(Role.TEC)
  update(@Param('id') id: number, @Body() createConvocatoriaDto: CreateConvocatoriaDto) {
    return this.convocatoriaService.update(id, createConvocatoriaDto);
  }

  @Patch(':id')
  @Version('1')
  @Auth(Role.TEC)
  updatePartial(@Param('id') id: number, @Body() updateConvocatoriaDto: UpdateConvocatoriaDto) {
    return this.convocatoriaService.updatePartial(id, updateConvocatoriaDto);
  }
}
