import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCartDto {

    @IsString()
    @IsUUID()  
    @IsOptional() 
    readonly id?: string;

    @IsString(//{message: 'The brand must be cool'}
    )   
    @IsOptional()
    readonly brand?: string;

    @IsString() 
    @IsOptional()
    @MinLength(3, {message: 'La longitud mínima es de 3'})
    readonly model?: string;

}