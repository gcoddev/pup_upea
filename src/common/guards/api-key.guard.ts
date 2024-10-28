import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { error } from 'console';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    private readonly validApiKey = process.env.NEST_API_KEY;

    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();
        const apiKey = request.headers['nest-api-key'];

        if (!apiKey || apiKey !== this.validApiKey) {
            throw new UnauthorizedException({
                statusCode: HttpStatus.UNAUTHORIZED,
                message: 'Inaccessible',
                error: 'Unauthorized'
            });
        }

        return true;
    }
}
