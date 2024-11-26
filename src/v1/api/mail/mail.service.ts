import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mail } from './entities/mail.entity';
import { Repository } from 'typeorm';
import { OrdenService } from '../orden/orden.service';
import { OrdenConceptoService } from '../orden-concepto/orden-concepto.service';
import { Orden } from '../orden/entities/orden.entity';
import axios from 'axios'
import { MailerService } from '@nestjs-modules/mailer';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import * as puppeteer from 'puppeteer';
import { minify } from 'html-minifier';
import { Request } from 'express';
import { UsersService } from '../auth/users/users.service';
import { decrypt } from 'src/common/helpers/encryption.helper';

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(Mail)
    private readonly mailRepository: Repository<Mail>,
    private readonly mailerService: MailerService,
    private readonly ordenService: OrdenService,
    private readonly ordenConceptoService: OrdenConceptoService,
    private readonly httpService: HttpService,
    private readonly userService: UsersService
  ) { }

  create(createMailDto: CreateMailDto) {
    return this.mailRepository.save(createMailDto)
  }

  async findAll(req: Request) {
    const iss = req['user']['iss']
    const user = await this.userService.findByCi(decrypt(iss))
    return this.mailRepository.find({
      where: {
        user
      },
      order: {
        idMail: 'DESC'
      }
    })
  }

  async findOne(id: number) {
    const mail: Mail = await this.mailRepository.findOneBy({ idMail: id });
    const orden: Orden = await this.ordenService.findOne(mail.orden.idOrden)
    // const conceptosss = await this.ordenConceptoService.findAllWithConceptos(orden)

    return {
      ...mail,
      orden: {
        ...orden,
      }
    }
  }

  async renderMailFromNuxt(mailId: number): Promise<string> {
    const url = `${process.env.URL_FRONT_DEV}/mail?id=${mailId}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: 'networkidle0' });
      let html = await page.content();

      html = minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true,
        minifyCSS: true,
      });

      await browser.close();
      return html;
    } catch (error) {
      console.error('Error al renderizar el correo:', error);
      await browser.close();
      throw error;
    }
  }

  async saveSendEmail(createMailDto: CreateMailDto) {
    const orden = await this.ordenService.findOne(createMailDto.orden.idOrden)
    // const orden = await this.ordenService.findOne(1)
    const mail = await this.mailRepository.save({
      ...createMailDto,
      orden
    })
    const htmlTemplate = await this.renderMailFromNuxt(mail.idMail)

    await this.mailerService.sendMail({
      to: mail.to,
      subject: mail.subject,
      html: htmlTemplate
    });

    return {
      success: true,
      message: 'Correo enviado correctamente',
      mail
    }
  }
}
