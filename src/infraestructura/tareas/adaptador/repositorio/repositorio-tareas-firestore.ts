import { Injectable } from "@nestjs/common";
import { RepositorioTareas } from "src/dominio/tareas/puerto/repositorio/repositorio-tareas";


@Injectable()
export class RepositorioTareasFirestore implements RepositorioTareas{
    async crear() {
        console.log("TodoCrear");
    }
    async actualizar(idTarea: string) {
        console.log(idTarea);
    }
    async eliminar(idTarea: string) {
        console.log(idTarea);
    }
}