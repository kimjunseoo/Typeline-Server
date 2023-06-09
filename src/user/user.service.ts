import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {  User } from '@prisma/client';
import { createUserInfoDTO } from './dto/createUserInfo.dto';

@Injectable()
export class UserService {
    constructor(private prismaservice : PrismaService){

    }

    async registerUserInfo(userInfo : createUserInfoDTO){
        await this.prismaservice.user.create({ data: userInfo });
    }
}
