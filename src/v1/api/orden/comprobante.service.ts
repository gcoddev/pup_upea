import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
// import * as PDFDocument from 'pdfkit';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { OrdenService } from './orden.service';
import { EstadoPago, EstadoText } from 'src/common/enums/estado-pago.enum';
import * as fs from 'fs';
import * as path from 'path';
import * as QRCode from 'qrcode';

@Injectable()
export class ComprobanteService {
    constructor(
        private readonly ordenService: OrdenService
    ) { }
    async generatePdf(cod: string): Promise<Buffer> {
        const orden = await this.ordenService.findCodigoSeguimiento(cod)

        let estado: any = ''
        switch (orden.estadoPago) {
            case EstadoPago.PROCESADO:
                estado = rgb(0.29, 0.87, 0.50); // #4ADE80
                break;
            case EstadoPago.EN_PROCESO:
                estado = rgb(0.984, 0.573, 0.235); // #FB923C
                break;
            case EstadoPago.EXPIRADO:
                estado = rgb(0.42, 0.447, 0.502); // #6B7280
                break;
            case EstadoPago.FALLIDO:
                estado = rgb(0.937, 0.267, 0.267); // #EF4444
                break;
            case EstadoPago.ANULADO:
                estado = rgb(0.612, 0.639, 0.686); // #9CA3AF
                break;
            default:
                estado = rgb(0.8, 0.8, 0.8); // #ccc
                break;
        }

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([612, 792]);
        const { width, height } = page.getSize();
        const fontSize = 12;

        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

        let cursorY = height - 50;

        // Carga e incrusta la imagen desde el archivo local
        const logoPath = path.join(__dirname, '../../../../public/public/images/upea.png'); // Ruta al logo
        const logoBytes = fs.readFileSync(logoPath); // Lee el archivo como buffer
        const logoImage = await pdfDoc.embedPng(logoBytes); // Incrusta la imagen PNG

        // Dibuja la imagen en el lugar del rectángulo
        page.drawImage(logoImage, {
            x: 50,
            y: cursorY - 60,
            width: 50,
            height: 50,
        });


        page.drawText('Plataforma Universitaria de Pagos', {
            x: 110,
            y: cursorY - 40,
            size: 16,
            font: boldFont,
            color: rgb(0, 0, 0),
        });

        const qrData = process.env.URL + "/comprobante?cod?" + cod;
        const qrImageBase64 = await QRCode.toDataURL(qrData);

        const qrImageBytes = Buffer.from(qrImageBase64.split(',')[1], 'base64');
        const qrImage = await pdfDoc.embedPng(qrImageBytes);

        page.drawImage(qrImage, {
            x: width - 120,
            y: cursorY - 70,
            width: 100,
            height: 100
        });

        cursorY -= 100;

        page.drawRectangle({
            x: 0,
            y: cursorY - 30,
            width: width,
            height: 50,
            color: estado,
        });

        page.drawText('Orden #' + orden.idOrden, {
            x: 50,
            y: cursorY - 12,
            size: 18,
            font: boldFont,
            color: rgb(1, 1, 1),
        });

        page.drawText(EstadoText[orden.estadoPago], {
            x: width - 200,
            y: cursorY - 12,
            size: fontSize,
            font,
            color: rgb(1, 1, 1),
        });

        cursorY -= 60;

        const paymentInfo = [
            ['Fecha del pago:', orden.creadoEl.toDateString()],
            ['Método de pago:', orden.metodoPago ?? '']
        ];

        paymentInfo.forEach(([label, value]) => {
            page.drawText(label, {
                x: 50,
                y: cursorY,
                size: fontSize,
                font: boldFont,
                color: rgb(0.592, 0.608, 0.643),
            });
            page.drawText(value, {
                x: 200,
                y: cursorY,
                size: fontSize,
                font,
                color: rgb(0, 0, 0),
            });
            cursorY -= 20;
        });

        const paymentA = [
            [orden.persona ? `${orden.persona.ci} ${orden.persona.expedido}` : `${orden.user.numeroDocumento} ${orden.user.expedido}`],
            [orden.persona ? `${orden.persona.nombres}` : `${orden.user.nombres}`],
            [orden.persona ? `${orden.persona.paterno} ${orden.persona.materno}` : `${orden.user.paterno} ${orden.user.materno}`],
            ['El Alto, La Paz'],
            ['Bolivia'],
        ];

        page.drawText('A:', {
            x: width - 200,
            y: cursorY + 40,
            size: fontSize,
            font: boldFont,
            color: rgb(0.592, 0.608, 0.643),
        });

        cursorY += 20;
        paymentA.forEach(([value]) => {
            page.drawText(value, {
                x: 410,
                y: cursorY,
                size: fontSize,
                font,
                color: rgb(0, 0, 0),
            });
            cursorY -= 20;
        });

        cursorY -= 10;

        const concepts = [['Descripción', '', 'Importe']]
        orden.conceptos.forEach(con => {
            concepts.push([con.concepto.concepto, '', `Bs. ${con.costo}`])
        })

        concepts.push(
            ['', 'Sub Total', `Bs. ${orden.subTotal}`],
            ['', 'Comisión', `Bs. ${orden.comision}`],
            ['', 'Total', `Bs. ${orden.montoTotal}`])

        const conceptColumnWidths = [70, 15, 15];

        cursorY = this.drawTable(page, concepts, 50, cursorY, width - 100, font, boldFont, conceptColumnWidths, fontSize, estado) - 30;

        const transactions = [
            ['Fecha', 'Método', 'ID Transacción', 'Total']
        ]

        let balance = orden.montoTotal
        orden.conceptos.forEach(con => {
            balance -= con.concepto.montoMinimo
            transactions.push(
                [orden.creadoEl.toDateString(), orden.metodoPago, orden.idOrden.toString(), `Bs. ${con.concepto.montoMinimo.toFixed(2)}`]
            )
        })

        balance -= orden.comision
        transactions.push(
            ['', '', '', `Bs. ${orden.comision}`],
            ['', '', 'Balance', `Bs. ${balance.toFixed(2)}`]
        )
        estado = balance == 0 ? rgb(0.29, 0.87, 0.50) : rgb(0.863, 0.208, 0.271);

        const transactionColumnWidths = [40, 20, 20, 20];
        page.drawText('Transacciones', {
            x: 50,
            y: cursorY + 10,
            size: fontSize,
            font: boldFont,
            color: rgb(0.1, 0.1, 0.1),
        });

        cursorY -= 20;
        cursorY = this.drawTable(page, transactions, 50, cursorY, width - 100, font, boldFont, transactionColumnWidths, fontSize, estado);

        const pdfBytes = await pdfDoc.save();
        return Buffer.from(pdfBytes);
    }

    drawTable(page: any, data: string[][], x: number, y: number, tableWidth: number, font: any, boldFont: any, columnWidths: number[], fontSize: number, estado: any): number {
        const rowHeight = fontSize + 10;
        const padding = 7;
        let cursorY = y;

        const wrapText = (
            text: string,
            maxWidth: number,
            font: any,
            fontSize: number
        ): string[] => {
            const lines: string[] = [];
            let currentLine = '';

            const sanitizedText = (text || '').replace(/\r?\n/g, ' ');
            const words = sanitizedText.split(' ');

            for (const word of words) {
                const testLine = currentLine ? `${currentLine} ${word}` : word;
                const testWidth = font.widthOfTextAtSize(testLine, fontSize);

                if (testWidth <= maxWidth) {
                    currentLine = testLine;
                } else {
                    if (currentLine) {
                        lines.push(currentLine);
                    }
                    currentLine = word;
                }
            }

            if (currentLine) {
                lines.push(currentLine);
            }

            return lines;
        };


        data.forEach((row, rowIndex) => {
            let cursorX = x;
            let currentFont = font;
            let backgroundColor = rgb(1, 1, 1);

            if (row[1] === 'Total') {
                backgroundColor = estado;
                currentFont = boldFont;
            } else if (rowIndex === 0) {
                currentFont = boldFont;
            }
            if (row[2] === 'Balance') {
                backgroundColor = estado;
                currentFont = boldFont;
            } else if (rowIndex === 0) {
                currentFont = boldFont;
            }

            let maxRowHeight = 1;

            row.forEach((cell, columnIndex) => {
                const columnWidth = tableWidth * (columnWidths[columnIndex] / 100);
                const wrappedText = wrapText(cell, columnWidth - 2 * padding, font, fontSize);
                maxRowHeight = Math.max(maxRowHeight, wrappedText.length);

                // Solo dibujamos el fondo verde si la celda tiene "Total" o "Bs. 181.00"
                if (backgroundColor !== rgb(1, 1, 1)) {
                    page.drawRectangle({
                        x: cursorX,
                        y: cursorY - rowHeight * wrappedText.length,
                        width: columnWidth,
                        height: rowHeight * wrappedText.length,
                        color: backgroundColor,
                    });
                }

                for (let i = 0; i < wrappedText.length; i++) {
                    const line = wrappedText[i];

                    let cy = (cursorY - (rowHeight * (wrappedText.length - 1 - i)) + padding) - 22;

                    if (wrappedText.length > 1) {
                        cy = (cursorY + 22 * (wrappedText.length - 1 - i)) - (22 * (wrappedText.length - 1)) - 11;
                    }

                    page.drawText(line, {
                        x: cursorX + padding,
                        y: cy,
                        size: fontSize,
                        font: currentFont,
                        color: rgb(0, 0, 0),
                    });
                }

                cursorX += columnWidth;
            });

            cursorY -= rowHeight * maxRowHeight;
        });

        return cursorY;
    }


    async generatePdfP(templateUrl: string): Promise<Buffer> {
        // const browser = await puppeteer.launch({ headless: process.env.NEST_MODE == 'production' ? true : false });
        const browser = await puppeteer.launch({
            headless: true,
        });
        // Usa launch({ headless: true }) en producción
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

    // async generateInvoicePdf(): Promise<Buffer> {
    //     const doc = new PDFDocument({ size: 'A4', margin: 50 });
    //     const buffers: Buffer[] = [];

    //     // Almacena los datos del PDF en un buffer
    //     doc.on('data', (chunk) => buffers.push(chunk));
    //     doc.on('end', () => console.log('PDF generado exitosamente.'));

    //     // Encabezado
    //     doc
    //         .image('public/public/images/upea.png', 50, 45, { width: 100 }) // Agrega tu logo
    //         .fontSize(20)
    //         .text('PUP UPEA', 200, 50, { align: 'right' })
    //         .moveDown();

    //     // Orden y estado
    //     doc
    //         .fontSize(12)
    //         .fillColor('#4caf50')
    //         .text('Orden #4', 50, 120, { continued: true })
    //         .fillColor('#000000')
    //         .text('Procesado', { align: 'right' });

    //     // Información de pago
    //     doc
    //         .moveDown()
    //         .fontSize(12)
    //         .text('Fecha del pago: 2024-12-06')
    //         .text('Método de Pago: QR')
    //         .text('A: 10077835 LP\nGary Apaza Apaza Mamani\nEl Alto, La Paz\nBolivia');

    //     // Tabla de conceptos
    //     doc
    //         .moveDown()
    //         .fontSize(12)
    //         .text('Conceptos', { underline: true })
    //         .text('MATRICULACIÓN NUEVOS Y ANTIGUOS - PROFESIONALES: Bs. 180.00')
    //         .moveDown()
    //         .text('Sub Total: Bs. 180.00')
    //         .text('Comisión: Bs. 1.00')
    //         .text('Total: Bs. 181.00', { bold: true });

    //     // Transacciones
    //     doc
    //         .moveDown()
    //         .fontSize(12)
    //         .text('Transacciones', { underline: true })
    //         .text('Fecha: 2024-04-12')
    //         .text('Método: QR')
    //         .text('ID Transacción: 4')
    //         .text('Balance: Bs. 0.00');

    //     // Código QR (usando un espacio para colocarlo)
    //     doc
    //         .moveDown()
    //         .fontSize(12)
    //         .text('Escanea este código QR:', 50, doc.y + 20)
    //         .image('public/public/images/upea.png', 50, doc.y + 10, { width: 100 }); // Reemplaza con tu imagen QR

    //     // Finaliza el documento
    //     doc.end();

    //     // Espera a que el PDF sea generado
    //     return new Promise((resolve) => {
    //         doc.on('end', () => {
    //             const pdfBuffer = Buffer.concat(buffers);
    //             resolve(pdfBuffer);
    //         });
    //     });
    // }
}
