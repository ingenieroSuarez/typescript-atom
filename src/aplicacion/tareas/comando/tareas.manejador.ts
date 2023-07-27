import { Injectable } from '@nestjs/common';
import { ComandoRegistrarTarea } from './registrar-tarea.comando';
import { ServicioRegistrarTarea } from 'src/dominio/tareas/servicio/servicio-registrar-tareas';
import { ServicioListarTareas } from 'src/dominio/tareas/servicio/servicio-listar-tareas';
import { ServicioEliminarTarea } from 'src/dominio/tareas/servicio/servicio-eliminar-tarea';
import { ServicioActualizarTarea } from 'src/dominio/tareas/servicio/servicio-actualizar-tarea';
import { ComandoActualizarTarea } from './actualizar-tarea.comando';

@Injectable()
export class ManejadorTareas {
  constructor(
     private _servicioRegistrarTarea: ServicioRegistrarTarea,
     private _servicioListarTareas: ServicioListarTareas,
     private _servicioActualizarTarea: ServicioActualizarTarea,
     private _servicioEliminarTarea: ServicioEliminarTarea,
    ) {}

  async registrar( tarea : ComandoRegistrarTarea) {
    return await this._servicioRegistrarTarea.ejecutar( tarea );
  }
  async listar(){
    return await this._servicioListarTareas.listar();
  }

  async eliminar(idTarea: string){
    return await this._servicioEliminarTarea.ejecutar(idTarea)
  }

  async actualizar(idTarea: string, tarea: ComandoActualizarTarea){
    return await this._servicioActualizarTarea.ejecutar(idTarea , tarea);
  }
}