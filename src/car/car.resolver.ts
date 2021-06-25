import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarInput } from './model/car.input';
import { Car } from './model/car.model';
import { CarService } from './car.service';

@Resolver(of => Car)
export class CarResolver {
    constructor(private carService: CarService) { }

    @Query(returns => [Car])
    async cars() {
        return await this.carService.getCars();
    }

    @Query(returns => Car)
    async car(@Args('id') id: string) {
        return await this.carService.getCarByID(id);
    }

    @Mutation(returns => Car)
    async createCar(@Args('car') car: CarInput) {
        return await this.carService.createCar(car);
    }

    @Mutation(returns => Car)
    async editCar(@Args('id') id: string, @Args('car') car: CarInput) {
        return await this.carService.updateCar(id, car);
    }

    @Mutation(returns => Car)
    async deleteCar(@Args('id') id: string) {
        return await this.carService.deleteCar(id);
    }
}