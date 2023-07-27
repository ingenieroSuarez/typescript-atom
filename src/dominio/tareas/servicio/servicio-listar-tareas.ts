import { Injectable } from '@nestjs/common';
import { DaoTareas } from '../puerto/dao/dao-tareas';

@Injectable()
export class ServicioListarTareas{
    constructor(
        private readonly _daoTareas: DaoTareas
    ){}
    async listar(){
        return await this._daoTareas.listar()
    }
}