import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/prisma.service';


@Injectable()
export class ScheduleService {
    constructor(private prismaservice : PrismaService){

    }

    getMonthSchedule(){

    }

    getDaySchedule(){

    }

    createSchedule(){

    }

    deleteSchedule(){

    }

    updateSchedule(){
        
    }
}

