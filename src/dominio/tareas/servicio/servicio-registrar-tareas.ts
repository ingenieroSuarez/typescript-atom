import { Injectable } from '@nestjs/common';
import { ComandoRegistrarTarea } from 'src/aplicacion/tareas/comando/registrar-tarea.comando';

@Injectable()
export class ServicioRegistrarTarea{
    async ejecutar( tarea: ComandoRegistrarTarea ){
        
        return tarea
    }

}
