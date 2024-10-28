import { Estado } from "src/common/enums/estado.enum"
import { Periodo } from "src/common/enums/periodo.enum"
import { TipoGestion } from "src/common/enums/tipo-gestion.enum"
import { Column, Entity, PrimaryColumn, Timestamp } from "typeorm"

@Entity('gestion')
export class Gestion {
    @PrimaryColumn()
    id: number

    @Column({ type: 'enum', enum: TipoGestion })
    tipo_gestion: TipoGestion

    @Column({ type: 'enum', enum: TipoGestion })
    periodo: Periodo

    @Column()
    gestion: string

    @Column({ type: 'date' })
    fecha_inicio: Date

    @Column({ type: 'date' })
    fecha_fin: Date

    @Column()
    descripcion: string

    @Column({ type: 'enum', enum: Estado })
    estado: Estado

    @Column({ type: 'timestamp' })
    fecha_gestion: Timestamp
}
