import { Module } from '@nestjs/common';
import { TareasControlador } from './controlador/tareas.controlador';
import { ManejadorTareas } from 'src/aplicacion/tareas/comando/tareas.manejador';
import { ServicioRegistrarTarea } from 'src/dominio/tareas/servicio/servicio-registrar-tareas';
import { ServicioListarTareas } from 'src/dominio/tareas/servicio/servicio-listar-tareas';

@Module({
    imports: [
    ],
    controllers: [ TareasControlador ],
    providers:[
      ManejadorTareas,
      ServicioRegistrarTarea,
      ServicioListarTareas
    ],
    exports:[
    ]

  })
  export class TareasModule {}