import { EstadoPago } from "src/common/enums/estado-pago.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../auth/users/entities/user.entity";

@Entity()
export class Orden {
    @PrimaryGeneratedColumn()
    idOrden: number;

    @Column()
    descripcion: string;

    @Column()
    codigoOrden: string;

    @Column()
    cantidad: number;

    @Column({ type: 'enum', enum: EstadoPago, default: EstadoPago.PENDIENTE })
    estadoPago: EstadoPago;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    montoTotal: number;

    @Column({ nullable: true })
    idPersona?: number

    @Column({ nullable: true })
    id_persona?: number
}