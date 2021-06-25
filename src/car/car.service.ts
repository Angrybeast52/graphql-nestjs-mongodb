import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarInput } from './model/car.input';
import { Car, CarDocument } from './schema/car.schema';

@Injectable()
export class CarService {
    constructor(@InjectModel('Car') private readonly carModel: Model<CarDocument>) {
    }

    async getCars(): Promise<Car[]> {
        return await this.carModel.find();
    }

    async getCarByID(id: String): Promise<Car> {
        return await this.carModel.findById(id);
    }

    async createCar(carDto: CarInput): Promise<Car> {
        const car = new this.carModel(carDto);
        return car.save();
    }

    async updateCar(id: string, carDto: CarInput): Promise<Car> {
        const carUpdate = await this.carModel.findByIdAndUpdate(
            id,
            carDto,
            { new: true },
        );
        carUpdate.save();
        return carUpdate;
    }

    async deleteCar(id: string): Promise<any> {
        const carDeleted = await this.carModel.findByIdAndDelete(id);
        return carDeleted;
    }

   


}