import { Injectable } from "@nestjs/common";
import { DaoTareas } from "src/dominio/tareas/puerto/dao/dao-tareas";


@Injectable()
export class DaoTareasFirestore implements DaoTareas{
    async listar() {
        return ["Todo listar"]
    }
}