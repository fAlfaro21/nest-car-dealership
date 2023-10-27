import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCartDto, UpdateCartDto } from './dto';


@Injectable()
export class CarsService {

    private cars: Car[] = [
       /*  {
            id: uuid(),
            model: 'Corolla',
            brand: 'Toyota',
        },  */
    ];

    public findAll(){
        return this.cars;
    }

    public findOneById(id:string){
        const car = this.cars.find( car => car.id == id);

        if(!car) throw new NotFoundException(`The car with id ${id} does not exist`);

        return car;
    }

    public createCar( createCartDto: CreateCartDto ){
        const car: Car = {
            id: uuid(),
            ...createCartDto
        };
        this.cars.push(car);
        return car;
    }

    public updateCar( id:string, updateCartDto: UpdateCartDto ){
        
        let carDB = this.findOneById(id);

        if ( updateCartDto.id && updateCartDto.id != id )
            throw new BadRequestException('Car id is not valid inside the body')

        this.cars = this.cars.map( car => {
            if(car.id === id){
                carDB = { ...carDB, ...updateCartDto, id }
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    public deleteCar( id:string ){
        
        let carToBeDeleted = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);

    }

    fillCarsWithSeedData( cars: Car[] ){
        this.cars = cars;
    }

}
