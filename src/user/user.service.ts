import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {  User } from '@prisma/client';
import { createUserInfoDTO } from './dto/createUserInfo.dto';
import { deleteUserInfoDTO } from './dto/deleteUserInfo.dto';

@Injectable()
export class UserService {
    constructor(private prismaservice : PrismaService){

    }

    async registerUserInfo(userInfo : createUserInfoDTO){

        //주어진 정보가 유효하다면, user 를 생성하고 해당 user 정보를 반환함.
        //주어진 user id가 이미 존재한다면, 해당 user id가 이미 존재한다는 예외를 반환함.
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
    
    async deleteUserInfo(userInfo: deleteUserInfoDTO){
        const userId = userInfo.user_id;

        const user = await this.prismaservice.user.findUnique({
            where: {
                user_id: userId
            }
        })

        if(!user){
            throw new NotFoundException(`ID ${userId} requested for deletion was not found.`);
            
        } else{

            await this.prismaservice.user.delete({
                where: {
                    user_id: userId
                }
            });

            return user;

        }


        //주어진 정보가 유효하다면, user 를 삭제하고 해당 user 정보를 반환함.
        //주어진 user id가 존재하지 않는다면, 해당 user id가 존재하지 않는다면 예외를 반환함.
    }
}
