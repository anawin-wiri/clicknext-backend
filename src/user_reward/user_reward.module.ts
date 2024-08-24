import { Module } from '@nestjs/common';
import { UserRewardService } from './user_reward.service';
import { UserRewardController } from './user_reward.controller';
import { UserReward } from './entities/user_reward.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Reward } from 'src/reward/entities/reward.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserReward, User, Reward])],
  controllers: [UserRewardController],
  providers: [UserRewardService],
})
export class UserRewardModule { }
