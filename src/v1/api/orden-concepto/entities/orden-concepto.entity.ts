import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Orden } from "../../orden/entities/orden.entity";
import { Concepto } from "src/v1/tesoro/concepto/entities/concepto.entity";

@Entity()
export class OrdenConcepto {
    @PrimaryGeneratedColumn()
    idOrdenConcepto: number

    @Column({ type: 'timestamp' })
    fecha: Timestamp

    @ManyToOne(() => Orden)
    @JoinColumn({
        name: 'idOrden',
        referencedColumnName: 'idOrden'
    })
    idOrden: Orden

    // @ManyToOne(() => Concepto)
    // idConcepto: Concepto

    @Column()
    idConcepto: number
}
