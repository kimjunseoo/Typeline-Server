import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class getMonthScheduleDTO {
    
    @ApiProperty()
    @IsNotEmpty()
    user_id : string
}

export class getDayScheduleDTO {

    @ApiProperty()
    @IsNotEmpty()
    user_id : string
}