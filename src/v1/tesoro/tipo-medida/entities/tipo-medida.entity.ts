import { EstadoTesoro } from "src/common/enums/estado-tesoro.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('tipo_medida')
export class TipoMedida {
    @PrimaryColumn()
    idtipo_medida: number;

    @Column()
    tipo_medida: string;

    @Column()
    tipo_me_simbolo: string;

    @Column({ type: 'enum', enum: EstadoTesoro })
    tipo_me_estado: EstadoTesoro;
}
