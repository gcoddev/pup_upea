import { Controller, Post, Body, Param } from '@nestjs/common';
import { PpeService } from './ppe.service';

@Controller()
export class PpeController {
  constructor(private readonly ppeService: PpeService) { }

  @Post('/:codigoSeguimiento')
  async postNotification(@Param('codigoSeguimiento') codigoSeguimiento: string, @Body() res: any) {
    const respuesta = await this.ppeService.notification(codigoSeguimiento, res)

    return respuesta
  }
}
