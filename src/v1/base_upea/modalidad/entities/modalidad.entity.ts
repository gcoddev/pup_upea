import { Estado } from "src/common/enums/estado.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('modalidad')
export class Modalidad {
    @PrimaryColumn()
    id: number;

    @Column()
    modalidad: string

    @Column({ nullable: true })
    partida: string

    @Column({ nullable: true })
    observaciones: string

    @Column()
    estado: Estado
}
