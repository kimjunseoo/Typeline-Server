import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class updateScheduleStatusDTO {

    @ApiProperty()
    @IsNotEmpty()
    schedule_id: number

    @ApiProperty()
    @IsNotEmpty()
    user_id: string

    @ApiProperty()
    @IsNotEmpty()
    status: boolean

}