import { Module } from '@nestjs/common';
import { TareasControlador } from './controlador/tareas.controlador';
import { ManejadorTareas } from 'src/aplicacion/tareas/comando/tareas.manejador';
import { ServicioRegistrarTarea } from 'src/dominio/tareas/servicio/servicio-registrar-tareas';
import { ServicioListarTareas } from 'src/dominio/tareas/servicio/servicio-listar-tareas';
import { ServicioEliminarTarea } from 'src/dominio/tareas/servicio/servicio-eliminar-tarea';
import { ServicioActualizarTarea } from 'src/dominio/tareas/servicio/servicio-actualizar-tarea';
import { RepositorioTareas } from 'src/dominio/tareas/puerto/repositorio/repositorio-tareas';
import { RepositorioTareasFirestore } from './adaptador/repositorio/repositorio-tareas-firestore';
import { DaoTareas } from 'src/dominio/tareas/puerto/dao/dao-tareas';
import { DaoTareasFirestore } from './adaptador/dao/dao-tareas-firestore';

const repositorioTareas = {
  provide: RepositorioTareas,
  useClass: RepositorioTareasFirestore,
};

const daoTareas = {
  provide: DaoTareas,
  useClass: DaoTareasFirestore,
};

@Module({
    imports: [
    ],
    controllers: [ TareasControlador ],
    providers:[
      ManejadorTareas,
      ServicioRegistrarTarea,
      ServicioListarTareas,
      ServicioEliminarTarea,
      ServicioActualizarTarea,
      repositorioTareas,
      daoTareas
    ],
    exports:[
    ]

  })
  export class TareasModule {}