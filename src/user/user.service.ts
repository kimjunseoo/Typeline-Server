import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {  User } from '@prisma/client';
import { createUserInfoDTO } from './dto/createUserInfo.dto';
import { deleteUserInfoDTO } from './dto/deleteUserInfo.dto';

@Injectable()
export class UserService {
    constructor(private prismaservice : PrismaService){

    }

    async registerUserInfo(userInfo : createUserInfoDTO): Promise<object>{

        const userId = userInfo.user_id;

        const user = await this.prismaservice.user.findUnique({
            where: {
                user_id: userId
            }
        });

        if(!user){
            const genUser = await this.prismaservice.user.create({ data: userInfo });

            return genUser;
        } else {
            throw new BadRequestException(`User ID ${userId} already exists. User IDs cannot be duplicated.`)
        }
        
    }
    
    async deleteUserInfo(userInfo: deleteUserInfoDTO): Promise<object>{
        const userId = userInfo.user_id;

        const user = await this.prismaservice.user.findUnique({
            where: {
                user_id: userId
            }
        })

        if(!user){
            throw new NotFoundException(`ID ${userId} requested for deletion was not found.`);
            
        } else {
            await this.prismaservice.user.delete({
                where: {
                    user_id: userId
                }
            });

            return user;

        }

    }
}
