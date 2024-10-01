import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.NEST_DB_TESORO_HOST,
            port: parseInt(process.env.NEST_DB_TESORO_PORT),
            username: process.env.NEST_DB_TESORO_USER,
            password: process.env.NEST_DB_TESORO_PASS,
            database: process.env.NEST_DB_TESORO_NAME,
            autoLoadEntities: false,
            synchronize: false,
            entities: [],
            name: 'tesoro'
        }),
    ],
})
export class TesoroModule { }
