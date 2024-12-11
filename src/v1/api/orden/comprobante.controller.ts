import { Controller, Get, Param, Query, Res, Version } from '@nestjs/common';
import { Response } from 'express';
import { ComprobanteService } from './comprobante.service';

@Controller('comprobante')
export class ComprobanteController {
    constructor(private readonly comprobanteService: ComprobanteService) { }

    @Get(':cod')
    @Version('1')
    async generatePdf(@Param('cod') cod: string, @Res() res: Response): Promise<void> {
        const pdfBuffer = await this.comprobanteService.generatePdf(cod);

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename="factura_${cod}.pdf"`,
        });

        res.send(pdfBuffer);
    }

    @Get(':cod')
    @Version('2')
    async generate(@Param('cod') cod: string, @Res() res: Response) {
        const templateUrl = `${process.env.URL_FRONT_DEV}/comprobante?cod=${cod}`;
        const pdfBuffer = await this.comprobanteService.generatePdfP(templateUrl);

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename=Orden-${cod}.pdf`,
        });

        res.send(pdfBuffer);
    }
}
