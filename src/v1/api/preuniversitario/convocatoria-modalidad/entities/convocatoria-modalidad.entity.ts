import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Convocatoria } from "../../convocatoria/entities/convocatoria.entity";

@Entity('convocatoria_modalidad')
export class ConvocatoriaModalidad {
    @PrimaryGeneratedColumn()
    idConvocatoriaModalidad: number;

    @ManyToOne(() => Convocatoria)
    @JoinColumn({
        name: 'convocatoria',
        referencedColumnName: 'idConvocatoria',
    })
    convocatoria: Convocatoria

    @Column()
    id_modalidad: number
}
