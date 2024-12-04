import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CodigoSeguimientoMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (req.method === 'POST' && req.path === `/${req.params.codigoSeguimiento}`) {
            // console.log('Petición recibida para código de seguimiento:', req.params.codigoSeguimiento);

            return res.status(200).json({ message: 'Procesado correctamente' });
        }
        next();
    }
}
