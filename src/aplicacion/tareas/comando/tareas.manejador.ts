import { Injectable } from '@nestjs/common';
import { ComandoRegistrarTarea } from './registrar-tarea.comando';
import { ServicioRegistrarTarea } from 'src/dominio/tareas/servicio/servicio-registrar-tareas';
import { ServicioListarTareas } from 'src/dominio/tareas/servicio/servicio-listar-tareas';


@Injectable()
export class ManejadorTareas {
  constructor(
     private _servicioRegistrarTarea: ServicioRegistrarTarea,
     private _servicioListarTareas: ServicioListarTareas
    ) {}

  async registrar( tarea : ComandoRegistrarTarea) {
    return await this._servicioRegistrarTarea.ejecutar( tarea );
  }
  async listar(){
    return await this._servicioListarTareas.listar();
  }

  async eliminar(idTarea: string){
    return "ToDO eliminar"
  }

  async actualizar(idTarea: string){
    return "ToDO actualizar"
  }
}