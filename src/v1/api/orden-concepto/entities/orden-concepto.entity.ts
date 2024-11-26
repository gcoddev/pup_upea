import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Orden } from "../../orden/entities/orden.entity";
import { IsNumber } from "class-validator";

@Entity()
export class OrdenConcepto {
    @PrimaryGeneratedColumn()
    idOrdenConcepto: number

    @ManyToOne(() => Orden)
    @JoinColumn({
        name: 'orden',
        referencedColumnName: 'idOrden'
    })
    orden: Orden

    @Column()
    id_concepto: number

    @Column()
    id_tipo_medida: number

    @Column()
    cantidad: number

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    costo: number

    @IsNumber()
    id_moneda: number
}