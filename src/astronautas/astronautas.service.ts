import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Astronautas } from './schemas/astonautas.schema';
import { Model } from 'mongoose';
@Injectable()
export class AstronautasService {
    constructor (@InjectModel(Astronautas.name) private astronautasModel:Model <Astronautas>){
    
    }
    async create(astronauta:any){
        const createdAstronauta = new this.astronautasModel(astronauta)
        return createdAstronauta.save();
    }
}
