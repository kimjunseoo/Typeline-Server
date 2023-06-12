import { userInfo } from 'os';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { ApiBody, ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createUserInfoDTO } from './dto/createUserInfo.dto';
import { deleteUserInfoDTO } from './dto/deleteUserInfo.dto';

@ApiTags('User API')
@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @ApiOperation({ summary: '회원 등록', description: '구글 소셜 로그인을 통해 최초 가입 시 진행하는 유저 등록' })
    @ApiResponse({
        status: 201,
        description: '회원 등록 성공',
    })
    @ApiResponse({ status: 500, description: 'Server Error'})
    @Post()
    async registerUserInfo(@Body() userInfo: createUserInfoDTO): Promise<void>{
        return this.userService.registerUserInfo(userInfo);
    }

    @ApiOperation({ summary: '회원 탈퇴', description: '가입한 유저 정보를 삭제 / 탈퇴' })
    @Delete()
    async deleteUserInfo(@Body() userInfo: deleteUserInfoDTO): Promise<void>{

    } 
}
