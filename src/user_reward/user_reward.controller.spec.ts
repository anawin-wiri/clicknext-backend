import { Test, TestingModule } from '@nestjs/testing';
import { UserRewardController } from './user_reward.controller';
import { UserRewardService } from './user_reward.service';

describe('UserRewardController', () => {
  let controller: UserRewardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRewardController],
      providers: [UserRewardService],
    }).compile();

    controller = module.get<UserRewardController>(UserRewardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
