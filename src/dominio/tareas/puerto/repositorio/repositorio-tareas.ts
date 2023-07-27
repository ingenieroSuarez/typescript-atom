import { ComandoActualizarTarea } from "src/aplicacion/tareas/comando/actualizar-tarea.comando";

export abstract class RepositorioTareas {
    abstract crear(tarea: object);
    abstract eliminar(idTarea:string);
    abstract actualizar(idTarea:string, tarea: ComandoActualizarTarea);
}