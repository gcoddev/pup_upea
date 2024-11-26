import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('extracto')
export class Extracto {
    @PrimaryGeneratedColumn()
    idExtracto: number

    @Column({ type: 'date' })
    fecha_extracto: Date

    @Column()
    sec: number

    @Column()
    idQr: number

    @Column()
    cod_ope: string

    @Column()
    nro_doc: number

    @Column()
    descripcionMovimiento: string

    @Column()
    cuentaTransferencia: number

    @Column({ type: 'float', precision: 10, scale: 2 })
    debito: number

    @Column({ type: 'float', precision: 10, scale: 2 })
    credito: number

    @Column({ type: 'float', precision: 10, scale: 2 })
    saldos: number

    @Column({ type: 'float', precision: 10, scale: 2 })
    importeConciliar: number

    @Column()
    estado: string
}
