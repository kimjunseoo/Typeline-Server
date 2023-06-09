import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class getScheduleDTO {
    
    @ApiProperty()
    @IsNotEmpty()
    userId : string
}