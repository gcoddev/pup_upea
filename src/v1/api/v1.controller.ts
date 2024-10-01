import { Controller, Get } from '@nestjs/common';

@Controller('v1')
export class V1Controller {
    @Get()
    getStatus() {
        return {
            success: true,
            message: 'API V1 is running!'
        };
    }
}
