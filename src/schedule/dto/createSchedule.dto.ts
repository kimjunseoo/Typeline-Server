import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class createScheduleDTO {

    @ApiProperty()
    @IsNotEmpty()
    userId : string

    @ApiProperty()
    @IsNotEmpty()
    memo : string
}