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
import * as Handlebars from 'handlebars';

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
        // leido: 'ASC',
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

  async saveSendEmail(createMailDto: CreateMailDto) {
    const orden = await this.ordenService.findOne(createMailDto.orden.idOrden)
    // const orden = await this.ordenService.findOne(1)
    const mail = await this.mailRepository.save({
      ...createMailDto,
      orden
    })
    if (orden.user) {
      const user = await this.userService.findOne(orden.user.id)
      if (user.receiveEmails) {
        // const htmlTemplate = await this.renderMailFromNuxt(mail.idMail)
        const htmlTemplate = await this.renderMail({
          ...mail,
          orden
        })

        try {
          await this.mailerService.sendMail({
            to: mail.to,
            subject: mail.subject,
            html: htmlTemplate
          });

          this.mailRepository.update(mail.idMail, {
            enviado: true
          })

          console.log('-- Correo enviado correctamente --');

          return {
            success: true,
            message: 'Correo enviado correctamente',
            mail
          }
        } catch (err) {
          console.log('-- Error: Correo no enviado --')

          return {
            success: false,
            message: 'Correo no enviado',
            mail
          }
        }
      } else {
        return {
          success: false,
          message: 'Correo no enviado',
          mail
        }
      }
    }

    return {
      success: false,
      message: 'Correo no enviado',
      mail
    }
  }

  async updateMail(id: number) {
    const mail = await this.mailRepository.update(id, {
      leido: true,
      fechaLeido: new Date()
    })

    if (mail.affected == 1) {
      return {
        success: true,
        message: 'Correo marcado como leído correctamente',
        mail
      }
    } else {
      return {
        success: false,
        message: 'Correo no modificado',
        mail
      }
    }
  }

  async renderMailFromNuxt(mailId: number): Promise<string> {
    const url = `${process.env.URL_FRONT_DEV}/mail?id=${mailId}`;
    const browser = await puppeteer.launch({
      headless: true
    });
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

  async renderMail(mail: any): Promise<string> {
    // Define la plantilla base con estilos
    const baseUrl = process.env.URL;
    let color;
    switch (mail.orden.estadoPago) {
      case 'PROCESADO':
        color = '#4ADE80';
        break;
      case 'EN_PROCESO':
        color = '#FB923C';
        break;
      case 'EXPIRADO':
        color = '#6B7280';
        break;
      case 'FALLIDO':
        color = '#EF4444';
        break;
      case 'ANULADO':
        color = '#9CA3AF';
        break;
      default:
        color = '#ccc';
        break;
    }
    let template = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Plataforma Universitaria de Pagos</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }
            .container {
                max-width: 600px;
                background: #fff;
                padding: 0px;
                margin: 20px;
                border: 3px solid ${color};
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                background-color: #f7f7f7;
                padding: 10px;
                margin: 0;
            }
            .header h1 {
                color: #333;
                margin: 0;
                font-size: 2.3rem;
                padding: 15px;
            }
            .content {
                line-height: 1.6;
                color: #555;
                padding: 15px;
            }
            .content p {
                margin: 10px 0;
                font-size: 14px;
            }
            .content b {
                color: #000;
            }
            .table {
                display: table;
                width: 100%;
            }
            .row {
                display: table-row;
            }
            .cell {
                display: table-cell;
                padding: 10px;
                vertical-align: top;
            }
            .footer {
                margin-top: 20px;
                text-align: center;
                font-size: 12px;
                color: #888;
            }
            .footer a {
                color: #007BFF;
                text-decoration: none;
            }
            .footer a:hover {
                text-decoration: underline;
            }
            @media (max-width: 600px) {
                .container {
                    padding: 10px;
                }
                .header h1 {
                    font-size: 1.5rem;
                }
                .content p {
                    font-size: 12px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Plataforma Universitaria de Pagos - UPEA</h1>
            </div>
            <div class="content">
                <div class="table">
                    <div class="row">
                        <div class="cell">`
    if (mail.orden.persona) {
      template += `
      <p>
        Hola ${mail.orden.persona.nombres}
        ${mail.orden.persona.paterno}
        ${mail.orden.persona.materno}!
      </p>
      `;
    }
    if (mail.orden.user) {
      template += `
      <p>
        Hola ${mail.orden.user.nombres}
        ${mail.orden.user.paterno}
        ${mail.orden.user.materno}!
      </p>
      `;
    }
    template += `
                            <p><b>Asunto:</b> ${mail.subject}</p>
                            <p>${mail.content}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <p><b>Fecha:</b> ${mail.fecha}</p>
                            <p><b>Concepto:</b></p>
                            <ul>`
    mail.orden.conceptos.forEach(con => {
      template += `
      <li>
          Bs. ${con.costo} - ${con.concepto.concepto}
      </li>
      `;
    });
    template += `
                                <li>Bs. ${mail.orden.comision} - Comisión</li>
                            </ul>
                            <p><b>Monto total:</b> Bs. ${mail.orden.montoTotal}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <p>Ingrese a <a href="${baseUrl}/comprobante?cod=${mail.orden.codigoTransaccion}" target="_blank">
                              ${baseUrl}/comprobante?cod?${mail.orden.codigoTransaccion}
                            </a> para ver detalles de su pedido.</p>
                            <p>Plataforma Universitaria de pagos<br>
                            <a href="${baseUrl}" target="_blank">${baseUrl}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p><a href="${baseUrl}">Visita nuestra web</a> | <a href="${baseUrl}/login" target="_blank">Ingresa a su cuenta</a></p>
                <p>Copyright © Plataforma Universitaria de Pagos - UPEA</p>
            </div>
        </div>
    </body>
    </html>
    `;

    const compiledTemplate = Handlebars.compile(template);
    const htmlContent = compiledTemplate(mail);

    return htmlContent
  }
}
