import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Astronautas,AstronautaSchema } from './schemas/astonautas.schema';
import { AstronautasService } from './astronautas.service';
import { AstronautasController } from './astronautas.controller';
@Module({
    imports:[
        MongooseModule.forFeature([{
            name:Astronautas.name,
            schema:AstronautaSchema
        }])
    ],
    providers: [AstronautasService],
    controllers: [AstronautasController]
})
export class AstronautasModule {}
