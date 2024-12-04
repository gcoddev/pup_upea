import { Injectable } from '@nestjs/common';
import { CreatePpeDto } from './dto/create-ppe.dto';
import { UpdatePpeDto } from './dto/update-ppe.dto';
import { OrdenService } from 'src/v1/api/orden/orden.service';
import { MailService } from 'src/v1/api/mail/mail.service';
import { UsersService } from 'src/v1/api/auth/users/users.service';
import { PersonasService } from 'src/v1/api/preuniversitario/personas/personas.service';
import { CreateMailDto } from 'src/v1/api/mail/dto/create-mail.dto';

@Injectable()
export class PpeService {
  constructor(
    private readonly ordenService: OrdenService,
    private readonly mailService: MailService,
    private readonly userService: UsersService,
    private readonly personaService: PersonasService,
  ) { }
  async notification(codigoSeguimiento: string, res: any) {
    const orden = await this.ordenService.findCodigoSeguimiento(codigoSeguimiento);
    if (res['finalizado'] == true) {
      const edit = await this.ordenService.update(orden.idOrden, {
        estadoPago: res['estado'],
        modificadoEl: res['fecha']
      })
    }

    if (orden.user) {
      const user = await this.userService.findOne(orden.user.id)

      if (user.email) {
        const mail = {
          to: user.email,
          fecha: new Date(),
          subject: 'Estado de pago',
          content: `${res['mensaje']}. ${res['detalle']['mensajeRespuesta']}`,
          leido: false,
          fechaLeido: null,
          orden: orden,
          user
        }
        this.mailService.saveSendEmail(mail)
      }
    } else {
      const persona = await this.personaService.findOne(orden.persona.idPersona)

      if (persona.email) {
        const mail = {
          to: persona.email,
          fecha: new Date(),
          subject: 'Estado de pago',
          content: `${res['mensaje']}\n${res['detalle']['mensajeRespuesta']}`,
          leido: false,
          fechaLeido: null,
          orden: orden
        }
        this.mailService.saveSendEmail(mail)
      }
    }

    return {
      finalizado: true,
      mensaje: "Notificación enviada con exito!",
      datos: {
        codigoTransaccion: res['codigoSeguimiento'],
        urlRedireccion: "https://pasarela.upea.bo/comprobante?cod=" + res['codigoSeguimiento']
      }
    }
  }
}
