import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {  User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prismaservice : PrismaService){

    }

    async registerUserInfo(userInfo : User){
        await this.prismaservice.user.create({ data: userInfo });
    }
}
