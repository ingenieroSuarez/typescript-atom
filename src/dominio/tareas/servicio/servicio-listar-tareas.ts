import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicioListarTareas{
    async listar(){

        return ["ToDO"]
    }

}