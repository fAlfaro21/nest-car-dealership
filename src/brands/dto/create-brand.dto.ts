import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {

    @IsString(//{message: 'The brand must be cool'}
    )   
    @MinLength(1, {message: 'La longitud mínima es de 1'})
    name: string;

}
