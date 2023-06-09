import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class createUserInfoDTO {
    @ApiProperty()
    @IsNotEmpty()
    user_id: string

    @ApiProperty()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsNotEmpty()
    image: string

    @ApiProperty()
    @IsNotEmpty()
    email: string
}