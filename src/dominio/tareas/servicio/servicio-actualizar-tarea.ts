import { Injectable } from '@nestjs/common';
import { ComandoActualizarTarea } from 'src/aplicacion/tareas/comando/actualizar-tarea.comando';
import { RepositorioTareas } from '../puerto/repositorio/repositorio-tareas';

@Injectable()
export class ServicioActualizarTarea{
    constructor(
        private readonly _repositorioTareas: RepositorioTareas
    ){}
    async ejecutar( idTarea: string, tarea: ComandoActualizarTarea ){
        console.log(idTarea, tarea);
        return await this._repositorioTareas.actualizar(idTarea, tarea)
    }

}