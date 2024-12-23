import { Estado } from "src/common/enums/estado.enum"
import { User } from "src/v1/api/auth/users/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ConvocatoriaModalidad } from "../../convocatoria-modalidad/entities/convocatoria-modalidad.entity"
import { Modalidad } from "src/v1/base_upea/modalidad/entities/modalidad.entity"

@Entity('convocatoria')
export class Convocatoria {
    @PrimaryGeneratedColumn()
    idConvocatoria: number

    @Column({ type: 'date' })
    fecha_ini: Date
    @Column({ type: 'date' })
    fecha_fin: Date

    @Column()
    id_carrera: number

    // @Column()
    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
    id_usuario: number

    @Column()
    id_sede: number

    @Column()
    id_gestion: number

    @Column()
    id_concepto: number

    // @Column()
    // id_modalidad: number

    @Column()
    cupos: number

    @Column({ nullable: true, default: null })
    file: string

    @Column({ type: 'float', precision: 5, scale: 2 })
    costo: number

    @Column({ type: 'enum', enum: Estado, default: Estado.ACTIVO })
    estado: Estado

    // @OneToMany(() => ConvocatoriaModalidad, (convocatoriaModalidad) => convocatoriaModalidad.convocatoria)
    // modalidad: Modalidad[]
}
