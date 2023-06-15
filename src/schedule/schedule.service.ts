import { updateScheduleDTO } from './dto/updateSchedule.dto';
import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { getDayScheduleDTO, getMonthScheduleDTO } from './dto/getSchedule.dto';
import { createScheduleDTO } from './dto/createSchedule.dto';
import { deleteScheduleDTO } from './dto/deleteSchedule.dto';


@Injectable()
export class ScheduleService {
    constructor(private prismaservice : PrismaService){

    }

    async getMonthSchedule(yyyy: string, mm: string, data: getMonthScheduleDTO): Promise<Array<object>> {

        const YYYY = yyyy;
        const MM = mm;
        const userId = data.user_id;
        
        const schedule = await this.prismaservice.schedule.findMany({
            where: {
                yyyy: YYYY,
                mm: MM,
                user_id: userId
            } 
        })

        if(!schedule){
            throw new NotFoundException(`No schedule registered with ID ${userId} in this month ${yyyy + mm}.`)
        } else {
            return schedule;
        }

    }

    async getDaySchedule(yyyy: string, mm: string, dd: string, data: getDayScheduleDTO): Promise<Array<object>>{

        const YYYY = yyyy;
        const MM = mm;
        const DD = dd;
        const userId = data.user_id;

        const schedule = await this.prismaservice.schedule.findMany({
            where: {
                yyyy: YYYY,
                mm: MM,
                dd: DD,
                user_id: userId
            }
        })

        if(schedule.length == 0){
            throw new NotFoundException(`No schedule registered with ID ${userId} in this day ${YYYY + MM + DD}.`)
        } else {
            return schedule; 
        }
        
    }

    async createSchedule(data: createScheduleDTO): Promise<object>{

        const userId = data.user_id;

        const user = await this.prismaservice.user.findUnique({
            where: {
                user_id: userId
            }
        })

        if(!user){
            throw new NotFoundException(`Unable to register schedule because ID ${userId} is not registered.`)
        } else {
            const schedule = await this.prismaservice.schedule.create({
                data: data
            })

            return schedule;
        }
        
    }

    async deleteSchedule(data: deleteScheduleDTO): Promise<object> {
        
        const userId = data.user_id;
        const scheduleId = data.schedule_id;

        const schedule = await this.prismaservice.schedule.findUnique({
            where: {
                schedule_id: scheduleId
            }
        });

        if(!schedule){

            throw new NotFoundException(`There is no schedule with that Schedule ID ${scheduleId}.`)

        } else if(schedule.user_id != userId){

            throw new UnauthorizedException(`User ${userId} does not have permission to delete the schedule.`)

        } else if(schedule){

            await this.prismaservice.schedule.delete({
                where: {
                    schedule_id: scheduleId
                }
            })

            return schedule;
        };
    }

    async updateSchedule(data: updateScheduleDTO): Promise<object>{

        const scheduleId = data.schedule_id;
        const userId = data.user_id;
        const memo = data.memo;
        
        const schedule = await this.prismaservice.schedule.findUnique({
            where: {
                schedule_id: scheduleId,
            }
        });

        if(!schedule){
            throw new NotFoundException(`There is no schedule with Schedule ID ${scheduleId}.`)
        } else if(schedule.user_id != userId) {
            throw new UnauthorizedException(`User ${userId} does not have permission to update the schedule.`)
        } else {
            const updatedSchedule = await this.prismaservice.schedule.update({
                where: {
                    schedule_id:scheduleId,
                },
                data: {
                    memo: memo
                }
            });

            return updatedSchedule;
        }

    }
}

