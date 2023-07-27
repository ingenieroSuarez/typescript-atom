import { Controller,  Post, Body, Put, Get, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComandoRegistrarTarea } from 'src/aplicacion/tareas/comando/registrar-tarea.comando';

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
    async registrarTarea(@Body() tarea: ComandoRegistrarTarea) {
      return tarea
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