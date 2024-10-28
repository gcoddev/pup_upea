import { IsString } from "class-validator";

export class AuthPersonaDto {
    @IsString({ message: 'El usuario debe ser texto' })
    username: string;

    @IsString({ message: 'La contraseña debe ser texto' })
    password: string;
}