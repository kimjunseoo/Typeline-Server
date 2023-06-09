import { createUserInfo } from './dto/create-userInfo.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @Post()
    registerUserInfo(@Body() userInfo: createUserInfo){
        return `${userInfo}`;
    }

}
