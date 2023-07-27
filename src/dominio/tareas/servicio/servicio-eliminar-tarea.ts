import { Injectable } from '@nestjs/common';
import { RepositorioTareas } from '../puerto/repositorio/repositorio-tareas';

@Injectable()
export class ServicioEliminarTarea{
    constructor(
        private readonly _repositorioTareas: RepositorioTareas
    ){ }
    async ejecutar(idTarea: string){

        return await this._repositorioTareas.eliminar(idTarea)
    }

}