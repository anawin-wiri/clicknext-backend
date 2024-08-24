import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { RewardModule } from './reward/reward.module';
import { UserRewardModule } from './user_reward/user_reward.module';
import { Reward } from './reward/entities/reward.entity';
import { UserReward } from './user_reward/entities/user_reward.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'point.sqlite', // ชื่อไฟล์ฐานข้อมูล
      entities: [User, Reward, UserReward], // รายการ Entity ของคุณ
      synchronize: true, // ควบคุมการซิงโครไนซ์กับฐานข้อมูล (ระวังในการใช้งานใน Production)
    }),
    UsersModule,
    AuthModule,
    RewardModule,
    UserRewardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
