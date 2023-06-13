import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { getDayScheduleDTO, getMonthScheduleDTO } from './dto/getSchedule.dto';
import { createScheduleDTO } from './dto/createSchedule.dto';


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

    deleteSchedule(){

    }

    updateSchedule(){
        
    }
}

