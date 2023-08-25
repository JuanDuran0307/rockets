import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
export enum AstronautasTipo{
    Comandante = 'Comandante',
    tripulante = 'Tripulante'
}
@Schema()
export class Astronautas{
    @Prop({required:true})
    nombre:String;
    @Prop({required:true})
    mision:String;
    @Prop({default:AstronautasTipo.tripulante})
    tipo:AstronautasTipo;
}

export const AstronautaSchema = SchemaFactory.createForClass(Astronautas)