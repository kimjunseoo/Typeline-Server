import { ApiProperty } from "@nestjs/swagger"

export class userDTO {

    @ApiProperty()
    user_id: string

    @ApiProperty()
	username: string

    @ApiProperty()
	image: string

    @ApiProperty()
	email: string

}