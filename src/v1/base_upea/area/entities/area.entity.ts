import { Estado } from "src/common/enums/estado.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('area')
export class Area {
    @PrimaryColumn()
    id: number;

    @Column()
    iniciales: string

    @Column()
    nombre_completo: string

    @Column()
    nombre_simple: string

    @Column()
    descripcion: string

    @Column()
    estado: Estado
}
