import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concepto } from 'src/v1/tesoro/concepto/entities/concepto.entity';
import { Departamento } from 'src/v1/tesoro/departamento/entities/departamento.entity';
import { MetodoPago } from 'src/v1/tesoro/metodo-pago/entities/metodo-pago.entity';
import { Moneda } from 'src/v1/tesoro/moneda/entities/moneda.entity';
import { TipoConcepto } from 'src/v1/tesoro/tipo-concepto/entities/tipo-concepto.entity';
import { TipoMedida } from 'src/v1/tesoro/tipo-medida/entities/tipo-medida.entity';
// import { UnidadMedida } from 'src/v1/tesoro/unidad-medida/entities/unidad-medida.entity';
import { UnidadMovimiento } from 'src/v1/tesoro/unidad-movimiento/entities/unidad-movimiento.entity';

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
            entities: [
                Concepto, Departamento, MetodoPago, Moneda, TipoConcepto, TipoMedida, UnidadMovimiento
            ],
            name: 'tesoro'
        }),
    ],
})
export class TesoroModule { }
