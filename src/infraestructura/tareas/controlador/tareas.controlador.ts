import { Controller,  Post, Body, Put, Get, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComandoRegistrarTarea } from 'src/aplicacion/tareas/comando/registrar-tarea.comando';
import { ManejadorTareas  } from 'src/aplicacion/tareas/comando/tareas.manejador';

@ApiTags('Tareas')
@Controller('Tasks')
export class TareasControlador {
  constructor(
    private readonly _manejadorTarea: ManejadorTareas,
  ){}
    @Get('')
    async listarTareas( ) {
      return await this._manejadorTarea.listar();
    }
    @Post('')
    async registrarTarea(@Body() tarea: ComandoRegistrarTarea) {
      return await this._manejadorTarea.registrar(tarea);
    }
    @Put(':idTarea')
    async actualizarTarea(@Param('idTarea') idTarea: string ) {
      return await this._manejadorTarea.actualizar(idTarea);
    }
    @Delete(':idTarea')
    async eliminarTarea(@Param('idTarea') idTarea: string ) {
        return await this._manejadorTarea.eliminar(idTarea);
    }
}