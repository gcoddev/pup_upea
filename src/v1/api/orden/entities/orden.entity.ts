import { EstadoPago } from "src/common/enums/estado-pago.enum";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../auth/users/entities/user.entity";
import { Persona } from "../../preuniversitario/personas/entities/persona.entity";
import { OrdenConcepto } from "../../orden-concepto/entities/orden-concepto.entity";
import { Concepto } from "src/v1/tesoro/concepto/entities/concepto.entity";

@Entity()
export class Orden {
    @PrimaryGeneratedColumn()
    idOrden: number;

    @Column()
    descripcion: string;

    @Column({ nullable: true })
    metodoPago: string;

    @Column({ nullable: true })
    idQr: string;

    @Column({ type: 'date', nullable: true })
    finVigencia: Date

    @Column({ nullable: true })
    urlRedireccion: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    creadoEl: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    modificadoEl: Date

    @Column({ nullable: true })
    codigoTransaccion: string;
    // codigoTransaccion === codigoSeguimiento

    @Column()
    codigoOrden: string;

    @Column({ type: 'enum', enum: EstadoPago, default: EstadoPago.EN_PROCESO })
    estadoPago: EstadoPago;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    subTotal: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    comision: number

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    montoTotal: number;

    @Column()
    id_moneda: number

    @ManyToOne(() => Persona, { nullable: true, eager: true })
    @JoinColumn({
        name: 'persona',
        referencedColumnName: 'idPersona'
    })
    persona?: Persona

    @ManyToOne(() => User, { nullable: true, eager: true })
    @JoinColumn({
        name: 'user',
        referencedColumnName: 'id'
    })
    user?: User

    @Column({ nullable: true })
    ip: string

    @Column({ nullable: true })
    notaAdicional?: string
}