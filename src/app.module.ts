import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampersModule } from './campers/campers.module';
import { AstronautasModule } from './astronautas/astronautas.module';


@Module({
  imports: [CampersModule,MongooseModule.forRoot('mongodb+srv://AstronautaUser:12345@clusterastronauta.bxbeqcn.mongodb.net/Astronautas_DB'), AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

