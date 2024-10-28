import { Estado } from "src/common/enums/estado.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('carrera')
export class Carrera {
    @PrimaryColumn()
    id: number

    @Column()
    area_id: number

    @Column()
    nombre_completo: string

    @Column()
    nombre_simple: string

    @Column()
    iniciales: string

    @Column()
    tipo_carrera: string

    @Column()
    descripcion: string

    @Column()
    descripcion_detalle: string

    @Column()
    tipo_gestion: string

    @Column()
    estado: Estado
}
