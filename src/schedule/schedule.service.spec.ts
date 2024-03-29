import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleService } from './schedule.service';
import { PrismaService } from '../prisma.service';

describe('ScheduleService', () => {
  let service: ScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleService, PrismaService],
    }).compile();

    service = module.get<ScheduleService>(ScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('getMonthSchedule', () => {
    it('주어진 정보가 유효하다면, 해당 달의 모든 일정 정보를 배열로 반환한다', () => {
      //expect(service.getMonthSchedule).toBeInstanceOf(Array);
    });
    it('주어진 날짜와 id로 일정이 조회되지 않는다면, 해당 월에 id로 저장된 정보가 없다는 예외를 반환한다.', () => {
      
    });
  });

  describe('getDaySchedule', () => {
    it('주어진 정보가 유효한다면, 해당 일의 일정 정보를 배열로 반환한다.', () => {

    });
    it('주어진 날짜와 id로 일정이 조회되지 않는다면, 해당 일에 id로 저장된 정보가 없다는 예외를 반환한다.', () => {

    });
  });

  describe('createSchedule', () => {
    it('주어진 정보가 유효하다면, 일정을 생성하고 생성된 일정 정보를 반환한다.', () => {

    });
    it('주어진 유저id가 조회되지 않는다면, 유저를 찾을 수 없다는 예외를 반환한다.', () => {

    });
  });

  describe('deleteSchedule', () => {
    it('주어진 정보가 유효하다면, 생성된 일정을 삭제하고 삭제한 일정 정보를 반환한다.', () => {

    });
    it('주어진 schedule id가 조회되지 않는다면, 일정을 찾을 수 없다는 예외를 반환한다.', () => {

    });
    it('주어진 user id가 일정의 user id와 다르다면, 주어진 user id 에게는 삭제 권한이 없다는 예외를 반환한다.', () => {

    });
  });

  describe('updateSchedule', () => {
    it('주어진 정보가 유효하다면, 생성된 일정을 변경하고 변경한 일정 정보를 반환한다.', () => {

    });
    it('주어진 schedule id가 조회되지 않는다면, 일정을 찾을 수 없다는 예외를 반환한다.', () => {

    });
    it('주어진 user id가 일정의 user id와 다르다면, 주어진 user id 에게는 변경 권한이 없다는 예외를 반환한다.', () => {

    });
  });

  describe('updateScheduleStatus', () => {
    it('주어진 정보가 유효하다면, 일정의 상태를 변경하고 변경한 일정 정보를 반환한다.', () => {

    });
    it('주어진 schedule id가 조회되지 않는다면, 일정을 찾을 수 없다는 예외를 반환한다.', () => {

    });
    it('주어진 user id가 일정의 user id와 다르다면, 주어진 user id 에게는 상태 변경 권한이 없다는 예외를 반환한다.', () => {

    });
  })

});
