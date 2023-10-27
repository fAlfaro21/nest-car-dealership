import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto, UpdateCartDto } from './dto';

@Controller('cars')
//@UsePipes( ValidationPipe )
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}


    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string){
        return this.carsService.findOneById(id);
    }

    @Post()
    //@UsePipes( ValidationPipe )
    createCar( @Body() createCartDto: CreateCartDto  ){
        return this.carsService.createCar(createCartDto);
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe) id:string, 
        @Body() updateCartDto: UpdateCartDto
        ){
        return this.carsService.updateCar(id, updateCartDto);
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id:string ){
        return this.carsService.deleteCar(id);
    }


}