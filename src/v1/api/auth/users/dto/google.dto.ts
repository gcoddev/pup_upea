import { IsNumber } from "class-validator";

export class GoogleDto {
    @IsNumber()
    google_id: number
}