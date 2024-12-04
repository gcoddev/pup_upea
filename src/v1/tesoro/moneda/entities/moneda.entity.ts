import { EstadoTesoro } from "src/common/enums/estado-tesoro.enum";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity('moneda')
export class Moneda {
    @PrimaryGeneratedColumn()
    id_moneda: number;

    @Column()
    nombre: string;

    @Column({ default: 'BOB' })
    abreviado: string;

    @Column({ type: 'enum', enum: EstadoTesoro })
    estado: EstadoTesoro;
}
