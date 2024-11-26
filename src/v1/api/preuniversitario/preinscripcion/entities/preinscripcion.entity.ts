import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../../personas/entities/persona.entity";
import { Convocatoria } from "../../convocatoria/entities/convocatoria.entity";
import { Orden } from "src/v1/api/orden/entities/orden.entity";
import { User } from "src/v1/api/auth/users/entities/user.entity";

@Entity('preinscripcion')
export class Preinscripcion {
    @PrimaryGeneratedColumn()
    idPreinscripcion: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMPT' })
    fecha: Date

    @ManyToOne(() => Persona, { nullable: true })
    @JoinColumn({
        name: 'persona',
        referencedColumnName: 'idPersona'
    })
    persona: Persona

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({
        name: 'user',
        referencedColumnName: 'id'
    })
    user: User

    @ManyToOne(() => Convocatoria, { eager: true })
    @JoinColumn({
        name: 'convocatoria',
        referencedColumnName: 'idConvocatoria'
    })
    convocatoria: Convocatoria

    @Column({ nullable: true, default: 0 })
    id_persona?: number

    @ManyToOne(() => Orden, { eager: true })
    @JoinColumn({
        name: 'orden',
        referencedColumnName: 'idOrden'
    })
    orden: Orden
}
