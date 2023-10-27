/* import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {} */

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto{

    @IsString(//{message: 'The brand must be cool'}
    )   
    @MinLength(1, {message: 'La longitud mínima es de 1'})
    name: string;

}
