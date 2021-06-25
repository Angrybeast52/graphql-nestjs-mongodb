import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './schema/car.schema';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }]),
    ],
    providers: [CarService, CarResolver]
})
export class CarModule { }