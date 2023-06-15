import { userInfo } from 'os';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { ApiBody, ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createUserInfoDTO } from './dto/createUserInfo.dto';
import { deleteUserInfoDTO } from './dto/deleteUserInfo.dto';
import { userDTO } from './dto/user.dto';

@ApiTags('User API')
@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @ApiOperation({ summary: '회원 등록', description: '구글 소셜 로그인을 통해 최초 가입 시 진행하는 유저 등록' })
    @ApiResponse({
        status: 201, type: userDTO, description: '회원 등록 성공'
    })
    @ApiResponse({
        status: 400, description: '회원 ID가 이미 등록된 ID입니다.'
    })
    @Post()
    async registerUserInfo(@Body() userInfo: createUserInfoDTO): Promise<object>{
        return this.userService.registerUserInfo(userInfo);
    }

    @ApiOperation({ summary: '회원 탈퇴', description: '가입한 유저 정보를 삭제 / 탈퇴' })
    @ApiResponse({
        status: 200, type: userDTO, description: '회원 삭제 성공'
    })
    @ApiResponse({
        status: 400, description: '요청 정보의 User ID가 등록되지않은 ID입니다.'
    })
    @Delete()
    async deleteUserInfo(@Body() userInfo: deleteUserInfoDTO): Promise<object>{
        return this.userService.deleteUserInfo(userInfo)
    } 
}
