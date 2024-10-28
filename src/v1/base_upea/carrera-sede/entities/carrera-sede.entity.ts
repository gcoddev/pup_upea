import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('vista_carrera_sede')
export class CarreraSede {
    @PrimaryColumn()
    id: number;

    @Column()
    car_id: number;

    @Column()
    carrera: string

    @Column()
    nombre_simple: string

    @Column()
    tipo_gestion: string

    @Column()
    id_sede: number

    @Column()
    sede: string

    @Column()
    inicial_sede: string

    @Column()
    direccion: string

    @Column()
    estado: string

    @Column()
    tipo_carrera_sede: string

    @Column()
    area_id: number

}
