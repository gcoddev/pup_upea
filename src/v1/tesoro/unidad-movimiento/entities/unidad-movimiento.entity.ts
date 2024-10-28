import { EstadoTesoro } from "src/common/enums/estado-tesoro.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('unidad_movimiento')
export class UnidadMovimiento {
    @PrimaryColumn()
    id: number;

    @Column()
    id_unidad: number;

    @Column()
    nombreUnidadMovimiento: string;

    @Column({ type: 'enum', enum: EstadoTesoro })
    estadoUnidadMovimiento: EstadoTesoro;
}