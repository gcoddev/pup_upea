import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/v1/api/auth/users/entities/user.entity';
import { Persona } from 'src/v1/api/personas/entities/persona.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.NEST_DB_HOST,
            port: parseInt(process.env.NEST_DB_PORT),
            username: process.env.NEST_DB_USER,
            password: process.env.NEST_DB_PASS,
            database: process.env.NEST_DB_NAME,
            autoLoadEntities: false,
            synchronize: JSON.parse(process.env.NEST_DB_SYNC),
            entities: [Persona, User],
        })
    ]
})
export class DbModule { }
