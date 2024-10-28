import { Expedido } from "src/common/enums/expedido.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    idPersona: number

    @Column({ unique: true })
    ci: string;

    @Column({ type: 'enum', enum: Expedido })
    expedido: Expedido;

    @Column()
    nombres: string;

    @Column()
    paterno: string;

    @Column()
    materno: string;

    @Column({ type: 'date' })
    fecha_nac: Date

    @Column({ nullable: true })
    email?: string;
}
