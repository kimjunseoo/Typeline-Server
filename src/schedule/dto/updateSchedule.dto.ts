import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class updateScheduleDTO {
    
    @ApiProperty()
    @IsNotEmpty()
    schedule_id: number

    @ApiProperty()
    @IsNotEmpty()
    user_id: string

    @ApiProperty()
    @IsNotEmpty()
    memo: string

}