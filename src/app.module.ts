import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [UserModule, ScheduleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
