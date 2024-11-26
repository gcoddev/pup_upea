import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/v1/api/auth/users/entities/user.entity';
import { ExtractoQr } from 'src/v1/api/extracto-qr/entities/extracto-qr.entity';
import { Extracto } from 'src/v1/api/extracto/entities/extracto.entity';
import { Mail } from 'src/v1/api/mail/entities/mail.entity';
import { OrdenConcepto } from 'src/v1/api/orden-concepto/entities/orden-concepto.entity';
import { Orden } from 'src/v1/api/orden/entities/orden.entity';
import { ConvocatoriaModalidad } from 'src/v1/api/preuniversitario/convocatoria-modalidad/entities/convocatoria-modalidad.entity';
import { Convocatoria } from 'src/v1/api/preuniversitario/convocatoria/entities/convocatoria.entity';
import { Persona } from 'src/v1/api/preuniversitario/personas/entities/persona.entity';
import { Preinscripcion } from 'src/v1/api/preuniversitario/preinscripcion/entities/preinscripcion.entity';

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
            synchronize: process.env.NEST_MODE == 'development' ? true : false,
            entities: [
                Persona, User, Orden, OrdenConcepto,
                Convocatoria, ConvocatoriaModalidad, Preinscripcion,
                ExtractoQr, Extracto, Mail
            ],
            logging: false
        })
    ]
})
export class DbModule { }
