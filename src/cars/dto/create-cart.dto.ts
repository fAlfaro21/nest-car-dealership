import { IsString, MinLength } from "class-validator";

export class CreateCartDto {

    @IsString(//{message: 'The brand must be cool'}
    )   
    readonly brand: string;

    @IsString() 
    @MinLength(3, {message: 'La longitud mínima es de 3'})
    readonly model: string;

}