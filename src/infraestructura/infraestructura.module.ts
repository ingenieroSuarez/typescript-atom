import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';

@Module({
    providers: [],
    imports: [
      TareasModule,
    ],
  })

export class InfraestructuraModule {}