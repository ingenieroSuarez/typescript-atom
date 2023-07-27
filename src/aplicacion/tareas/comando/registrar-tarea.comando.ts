import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarTarea {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: "Programar" })
    public titulo: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: "implementar API ATOM" })
    public descripcion: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: true })
    public tareaFinalizada: boolean;
}