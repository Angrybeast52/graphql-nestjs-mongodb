import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CarDocument = Car & Document;

@Schema()
export class Car {
    @Prop()
    model: string;
    @Prop()
    marca: string;
    @Prop()
    type: string;
    @Prop()
    price: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);