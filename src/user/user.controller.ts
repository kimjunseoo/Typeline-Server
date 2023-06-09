import { userInfo } from 'os';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @Post()
    registerUserInfo(@Body() userInfo: User){
        return this.userService.registerUserInfo(userInfo);
    }

}
