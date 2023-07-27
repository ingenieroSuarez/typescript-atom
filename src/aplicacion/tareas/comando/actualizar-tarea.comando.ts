import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoActualizarTarea {
    @IsString()
    @ApiProperty({ example: "Programar" })
    public titulo: string;

    @IsString()
    @ApiProperty({ example: "implementar API ATOM" })
    public descripcion: string;

    @IsString()
    @ApiProperty({ example: true })
    public tareaFinalizada: boolean;
}