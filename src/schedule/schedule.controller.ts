import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { userInfo } from 'os';
import { getScheduleDTO } from './dto/getSchedule.dto';
import { createScheduleDTO } from './dto/createSchedule.dto';

@ApiTags('Schedule API')
@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService : ScheduleService){

    }

    @ApiOperation({ summary: '한 달 일정 불러오기', description: '' })
    @ApiParam({
        name: "yyyymm",
        required: true,
        description: "연도와 월을 붙인 포맷 / ex: 202306"
    })
    @Get('/month/:yyyymm')
    getMonthSchedule(@Param('yyyymm', ParseIntPipe) yyyymm: number, @Body() data: getScheduleDTO){

    }

    @ApiOperation({ summary: '하루 일정 불러오기', description: '' })
    @ApiParam({
        name: "yyyymmdd",
        required: true,
        description: "연도와 월, 일을 붙인 포맷 / ex: 20230609"
    })
    @Get('/:yyyymmdd')
    getDaySchedule(@Param('yyyymmdd', ParseIntPipe) yyyymmdd: number, @Body() data: getScheduleDTO){

    }

    @ApiOperation({ summary: '일정 추가', description: '' })
    @ApiParam({
        name: "yyyymmdd",
        required: true,
        description: "연도와 월, 일을 붙인 포맷 / ex: 20230609"
    })
    @Post('/:yyyymmdd')
    createSchedule(@Param('yyyymmdd', ParseIntPipe) yyyymmdd: number, @Body() data: createScheduleDTO){

    }

    @ApiOperation({ summary: '일정 삭제', description: '' })
    @ApiParam({
        name: "yyyymmdd",
        required: true,
        description: "연도와 월, 일을 붙인 포맷 / ex: 20230609"
    })
    @Delete('/:yyyymmdd')
    deleteSchedule(@Param('yyyymmdd', ParseIntPipe) yyyymmdd: number){

    }

    @ApiOperation({ summary: '일정 변경', description: '' })
    @ApiParam({
        name: "month",
        required: true,
        description: "조회할 월"
    })
    @ApiQuery({
        name: "day",
        required: true,
        description: "조회할 일"
    })
    @Patch('/:month?day')
    updateSchedule(){

    }

}
