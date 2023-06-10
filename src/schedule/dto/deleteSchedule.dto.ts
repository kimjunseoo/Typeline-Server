import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class deleteScheduleDTO {

    @ApiProperty()
    @IsNotEmpty()
    schedule_id: number

    @ApiProperty()
    @IsNotEmpty()
    user_id: string

}