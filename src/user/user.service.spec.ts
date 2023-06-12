import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../../src/prisma.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('registerUserInfo', () => {
    it('주어진 정보가 유효하다면, user 를 생성하고 해당 user 정보와 생성 성공 문구를 json 형태로 반환함.', () => {

    });
    it('주어진 user id가 이미 존재한다면, 해당 user id가 이미 존재한다는 예외를 반환함.', () => {

    });
  });

  describe('deleteUserInfo', () => {
    it('주어진 정보가 유효하다면, user 를 삭제하고 해당 user 정보와 삭제 성공 문구 json 형태로 반환함.', () => {

    });
    it('주어진 user id가 존재하지 않는다면, 해당 user id가 존재하지 않는다면 예외를 반환함.', () => {

    });
  });
});