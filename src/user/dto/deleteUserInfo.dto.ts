import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class deleteUserInfoDTO {

    @ApiProperty()
    @IsNotEmpty()
    user_id: string

}