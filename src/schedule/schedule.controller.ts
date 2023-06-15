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
    @Get('/day')
    getDaySchedule( @Query("yyyy") yyyy: string, @Query("mm") mm: string, @Query("dd") dd: string, @Body() data: getDayScheduleDTO): Promise<Array<object>>{
        return this.scheduleService.getDaySchedule(yyyy, mm, dd, data);
    }

    @ApiOperation({ summary: '일정 추가', description: '' })
    @Post()
    createSchedule(@Body() data: createScheduleDTO): Promise<object>{
        return this.scheduleService.createSchedule(data);
    }

    @ApiOperation({ summary: '일정 삭제', description: '' })
    @Delete()
    deleteSchedule(@Body() data: deleteScheduleDTO): Promise<object>{
        return this.scheduleService.deleteSchedule(data);
    }

    @ApiOperation({ summary: '일정 변경', description: '' })
    @Patch()
    updateSchedule(@Body() data: updateScheduleDTO): Promise<object>{
        return this.scheduleService.updateSchedule(data);
    }

    @ApiOperation({ summary: '일정 상태 변경', description: '일정 완료 여부' })
    @Patch('/status')
    updateScheduleStatus(@Body() data: updateScheduleStatusDTO): Promise<object>{
        return this.scheduleService.updateScheduleStatus(data);
    }
}
