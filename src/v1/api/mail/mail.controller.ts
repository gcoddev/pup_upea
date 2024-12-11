import { Controller, Get, Post, Body, Patch, Param, Delete, Version, UseGuards, Req } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { ApiKeyGuard } from 'src/v1/api/auth/guard/api-key.guard';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/auth/role.enum';
import { Request } from 'express';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @Post()
  @Version('1')
  create(@Body() createMailDto: CreateMailDto) {
    return this.mailService.saveSendEmail(createMailDto);
  }

  @Get()
  @Version('1')
  @Auth(Role.GUEST)
  findAll(@Req() req: Request) {
    return this.mailService.findAll(req);
  }

  @Get(':id')
  @Version('1')
  // @UseGuards(ApiKeyGuard)
  findOne(@Param('id') id: number) {
    return this.mailService.findOne(id);
  }

  @Patch(':id')
  @Version('1')
  updateMail(@Param('id') id: number) {
    return this.mailService.updateMail(id);
  }
}
