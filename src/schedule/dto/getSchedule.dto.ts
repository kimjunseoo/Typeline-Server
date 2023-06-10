import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class getMonthScheduleDTO {
    
    @ApiProperty()
    @IsNotEmpty()
    userId : string
}

export class getDayScheduleDTO {

    @ApiProperty()
    @IsNotEmpty()
    userId : string
}