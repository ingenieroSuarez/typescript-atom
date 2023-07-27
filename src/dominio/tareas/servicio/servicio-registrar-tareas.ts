import { Injectable } from '@nestjs/common';
import { ComandoRegistrarTarea } from 'src/aplicacion/tareas/comando/registrar-tarea.comando';
import { RepositorioTareas } from '../puerto/repositorio/repositorio-tareas';

@Injectable()
export class ServicioRegistrarTarea{
    constructor(
        private readonly _repositorioTareas: RepositorioTareas
    ){ }
    async ejecutar( tarea: ComandoRegistrarTarea ){
        return await this._repositorioTareas.crear(tarea)
    }

}
