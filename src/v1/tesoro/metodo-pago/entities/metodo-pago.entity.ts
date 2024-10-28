import { EstadoTesoro } from "src/common/enums/estado-tesoro.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('metodo_pago')
export class MetodoPago {
    @PrimaryGeneratedColumn()
    id_metodo_pago: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column({ type: 'enum', enum: EstadoTesoro, default: EstadoTesoro.ACTIVO })
    estado: EstadoTesoro;
}
