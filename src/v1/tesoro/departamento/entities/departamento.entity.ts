// import { EstadoTesoro } from "src/common/enums/estado-tesoro.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('departamento')
export class Departamento {
    @PrimaryGeneratedColumn()
    id_departamento: number;

    @Column()
    nombre: string;

    @Column()
    abreviado: string;

    // @Column({ type: 'enum', enum: EstadoTesoro, default: EstadoTesoro.ACTIVO })
    // estado: EstadoTesoro;
}
