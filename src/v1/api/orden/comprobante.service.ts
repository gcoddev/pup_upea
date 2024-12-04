import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ComprobanteService {
    async generatePdf(templateUrl: string): Promise<Buffer> {
        // const browser = await puppeteer.launch({ headless: process.env.NEST_MODE == 'production' ? true : false });
        const browser = await puppeteer.launch({
            headless: true,
        });
        // Usa `launch({ headless: true })` en producción
        const page = await browser.newPage();

        await page.goto(templateUrl, {
            waitUntil: 'networkidle0',
            timeout: 0
        });

        const pdf = await page.pdf({
            format: 'LETTER',
            printBackground: true,
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            }
        });

        await browser.close();
        return Buffer.from(pdf);
    }
}
