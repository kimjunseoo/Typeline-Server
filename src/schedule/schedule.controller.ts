import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { userInfo } from 'os';
import { getDayScheduleDTO, getMonthScheduleDTO } from './dto/getSchedule.dto';
import { createScheduleDTO } from './dto/createSchedule.dto';
import { deleteScheduleDTO } from './dto/deleteSchedule.dto';
import { updateScheduleDTO } from './dto/updateSchedule.dto';
import { updateScheduleStatusDTO } from './dto/updateScheduleStatus.dto';

@ApiTags('Schedule API')
@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService : ScheduleService){

    }

    @ApiOperation({ summary: '한 달 일정 불러오기', description: '' })
    @ApiQuery({
        name: "yyyy",
        required: true,
        description: "연도 / YYYY포맷 / ex: 2023"
    })
    @ApiQuery({
        name: "mm",
        required: true,
        description: "월 / MM포맷 / ex: 06"
    })
    @ApiResponse({
        status: 200, description: '월 일정 불러오기 성공'
    })
    @ApiResponse({
        status: 404, description: '요청한 정보에 대한 일정 정보가 없습니다.'
    })
    @Get('/month')
    getMonthSchedule( @Query("yyyy") yyyy: string, @Query("mm") mm: string, @Body() data: getMonthScheduleDTO): Promise<Array<object>>{

        return this.scheduleService.getMonthSchedule(yyyy, mm, data);
    }

    @ApiOperation({ summary: '하루 일정 불러오기', description: '' })
    @ApiQuery({
        name: "yyyy",
        required: true,
        description: "연도 / YYYY포맷 / ex: 2023"
    })
    @ApiQuery({
        name: "mm",
        required: true,
        description: "월 / MM포맷 / ex: 06"
    })
    @ApiQuery({
        name: "dd",
        required: true,
        description: "일 / DD포맷 / ex: 10"
    })
    @ApiResponse({
        status: 200, description: '일 일정 불러오기 성공'
    })
    @ApiResponse({
        status: 404, description: '요청한 정보에 대한 일정 정보가 없습니다.'
    })
    @Get('/day')
    getDaySchedule( @Query("yyyy") yyyy: string, @Query("mm") mm: string, @Query("dd") dd: string, @Body() data: getDayScheduleDTO): Promise<Array<object>>{
        return this.scheduleService.getDaySchedule(yyyy, mm, dd, data);
    }

    @ApiOperation({ summary: '일정 추가', description: '' })
    @ApiResponse({
        status: 201, description: '일정 생성하기 성공'
    })
    @ApiResponse({
        status: 404, description: '요청 정보 중 User ID가 등록되지않은 ID입니다. '
    })
    @Post()
    createSchedule(@Body() data: createScheduleDTO): Promise<object>{
        return this.scheduleService.createSchedule(data);
    }

    @ApiOperation({ summary: '일정 삭제', description: '' })
    @ApiResponse({
        status: 200, description: '일정 삭제하기 성공'
    })
    @ApiResponse({
        status: 401, description: '요청 정보의 User ID에게는 삭제 요청 권한이 없습니다.'
    })
    @ApiResponse({
        status: 404, description: '삭제를 요청한 schedule id에 대한 일정 정보가 존재하지 않습니다.'
    })
    @Delete()
    deleteSchedule(@Body() data: deleteScheduleDTO): Promise<object>{
        return this.scheduleService.deleteSchedule(data);
    }

    @ApiOperation({ summary: '일정 변경', description: '' })
    @ApiResponse({
        status: 200, description: '일정 변경하기 성공'
    })
    @ApiResponse({
        status: 401, description: '요청 정보의 User ID에게는 변경 요청 권한이 없습니다.'
    })
    @ApiResponse({
        status: 404, description: '변경을 요청한 schedule id에 대한 일정 정보가 존재하지 않습니다.'
    })
    @Patch()
    updateSchedule(@Body() data: updateScheduleDTO): Promise<object>{
        return this.scheduleService.updateSchedule(data);
    }

    @ApiOperation({ summary: '일정 상태 변경', description: '일정 완료 여부' })
    @ApiResponse({
        status: 200, description: '일정 변경하기 성공'
    })
    @ApiResponse({
        status: 401, description: '요청 정보의 User ID에게는 상태 변경 요청 권한이 없습니다.'
    })
    @ApiResponse({
        status: 404, description: '상태 변경을 요청한 schedule id에 대한 일정 정보가 존재하지 않습니다.'
    })
    @Patch('/status')
    updateScheduleStatus(@Body() data: updateScheduleStatusDTO): Promise<object>{
        return this.scheduleService.updateScheduleStatus(data);
    }
}
