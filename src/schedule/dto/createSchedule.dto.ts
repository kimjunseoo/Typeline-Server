import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class createScheduleDTO {

    @ApiProperty()
    @IsNotEmpty()
    yyyy: string

    @ApiProperty()
    @IsNotEmpty()
    mm: string
    
    @ApiProperty()
    @IsNotEmpty()
    dd: string

    @ApiProperty()
    @IsNotEmpty()
    userId: string

    @ApiProperty()
    @IsNotEmpty()
    memo: string
}