import { ApiProperty } from "@nestjs/swagger"

export class scheduleDTO {
    
    @ApiProperty()
    schedule_id: number

    @ApiProperty()
	user_id: string

    @ApiProperty()
	yyyy: string

    @ApiProperty()
	mm: string

    @ApiProperty()
	dd: string

    @ApiProperty()
	memo: string

    @ApiProperty()
	status: boolean
}