import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Expedido } from "../../../../../common/enums/expedido.enum";
import { Estado } from "src/common/enums/estado.enum";
import { Role } from "src/common/enums/auth/role.enum";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => TipoDocumento, { eager: true })
    // @JoinColumn({ name: "tipoDocumento", referencedColumnName: "id_documento" })
    // tipoDocumento: TipoDocumento;

    @Column({ unique: true })
    numeroDocumento: string;

    @Column({ type: 'enum', enum: Expedido })
    expedido: Expedido;

    @Column()
    nombres: string;

    @Column()
    paterno: string;

    @Column()
    materno: string;

    @Column({ type: 'date' })
    fecha_nac: Date;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column({ select: false })
    password: string;

    @Column({ unique: true, nullable: true })
    googleId?: string;

    @Column({ type: 'enum', enum: Role, default: Role.GUEST })
    role: string;

    // @Column({ nullable: true, comment: 'Usuarios invitados o postulantes' })
    // idPersona?: number

    @Column({ unique: true, comment: 'Usuarios desde  base_upea' })
    id_persona: number

    @Column({ nullable: true })
    id_carrera?: number

    @Column({ type: 'enum', enum: Estado, default: Estado.ACTIVO })
    estado: Estado;
}