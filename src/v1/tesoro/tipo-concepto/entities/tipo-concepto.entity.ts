import { Column, Entity, PrimaryColumn, Timestamp } from "typeorm";

@Entity('tipo_concepto')
export class TipoConcepto {
    @PrimaryColumn()
    id: number

    @Column()
    descripcion: string

    // @Column({ type: 'timestamp' })
    // fecha_creacion: Timestamp

    // @Column({ type: 'date' })
    // fecha_edicion: Date
}
