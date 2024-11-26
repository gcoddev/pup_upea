import { IsEmail, IsNumber } from "class-validator";

export class GoogleDto {
    @IsNumber()
    googleId: string

    @IsEmail()
    email: string
}