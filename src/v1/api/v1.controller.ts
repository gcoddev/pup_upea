import { Body, Controller, Get, Param, Version } from '@nestjs/common';
import { decrypt } from 'src/common/helpers/encryption.helper';

@Controller('v1')
export class V1Controller {
    @Get()
    getStatus() {
        return {
            success: true,
            message: 'API V1 is running!'
        };
    }

    @Get('codigo')
    getCode(@Body() body: string) {
        if (body['code']) {
            return {
                code: decrypt(body['code'])
            }
        } else {
            return {
                error: 'Invalid request'
            }
        }
    }
}
