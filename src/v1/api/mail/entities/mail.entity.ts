import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../auth/users/entities/user.entity";
import { Orden } from "../../orden/entities/orden.entity";

@Entity('mail')
export class Mail {
    @PrimaryGeneratedColumn()
    idMail: number

    @Column()
    to: string

    @Column({ type: 'date' })
    fecha: Date

    @Column()
    subject: string

    @Column({ type: 'text' })
    content: string

    @Column({ type: 'boolean', default: false })
    leido: boolean

    @Column({ type: 'boolean', default: false })
    enviado: boolean

    @Column({ type: 'timestamp', nullable: true })
    fechaLeido: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    creadoEl: Date

    @ManyToOne(() => Orden, { eager: true, nullable: true })
    @JoinColumn({
        name: 'orden',
        referencedColumnName: 'idOrden'
    })
    orden: Orden

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({
        name: 'user',
        referencedColumnName: 'id'
    })
    user: User
}
