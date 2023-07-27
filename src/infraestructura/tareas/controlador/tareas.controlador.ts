import { Controller,  Post, Body, Put, Get, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tareas')
@Controller('Tasks')
export class TareasControlador {
  constructor(
  ){}
    @Get('')
    async listarTareas( ) {
      return "ToDO"
    }
    @Post('')
    async registrarTarea( ) {
      return "ToDO"
    }
    @Put('')
    async actualizarTarea( ) {
      return "ToDO"
    }
    @Delete('')
    async eliminarTarea( ) {
      return "ToDO"
    }
}