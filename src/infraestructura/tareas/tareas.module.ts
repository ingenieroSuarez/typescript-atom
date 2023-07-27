import { Module } from '@nestjs/common';
import { TareasControlador } from './controlador/tareas.controlador';

@Module({
    imports: [
      
    ],
    controllers: [ TareasControlador ],
    providers:[
      
    ],
    exports:[
      
    ]

  })
  export class TareasModule {}