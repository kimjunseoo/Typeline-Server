import { IsNotEmpty } from "class-validator";

export class createUserInfo {

    @IsNotEmpty()
    userId : string;

    @IsNotEmpty()
    email : string; 

    @IsNotEmpty()
    username : string;

    @IsNotEmpty()
    image : string;

}