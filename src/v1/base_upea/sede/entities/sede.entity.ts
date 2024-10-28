import { Estado } from "src/common/enums/estado.enum";
import { SedeEnum } from "src/common/enums/sede.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('sede')
export class Sede {
    @PrimaryColumn()
    id: number;

    @Column({ type: 'enum', enum: SedeEnum })
    tipo: SedeEnum

    @Column()
    inicial_sede: string

    @Column()
    nombre: string

    @Column()
    direccion: string

    @Column()
    estado: Estado
}
