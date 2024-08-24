import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserRewardDto } from './dto/create-user_reward.dto';
import { UpdateUserRewardDto } from './dto/update-user_reward.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Reward } from 'src/reward/entities/reward.entity';
import { UserReward } from './entities/user_reward.entity';

@Injectable()
export class UserRewardService {
  constructor(
    @InjectRepository(User)
    private userService: Repository<User>,
    @InjectRepository(UserReward)
    private userRewardRepository: Repository<UserReward>,
    @InjectRepository(Reward)
    private rewardService: Repository<Reward>,
  ) { }
  async create(createUserRewardDto: CreateUserRewardDto) {
    const { userId, rewardId } = createUserRewardDto;

    const user = await this.userService.findOne({
      where: { userId: userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const reward = await this.rewardService.findOne({
      where: { rewardId: rewardId },
    });
    if (!reward) {
      throw new NotFoundException('Reward not found');
    }

    const userReward = new UserReward();
    userReward.user = user;
    userReward.reward = reward;
    userReward.rewardId = reward.rewardId;
    userReward.userId = user.userId;

    const savedUserReward = this.userRewardRepository.save(userReward);
    return savedUserReward;
  }

  findAll() {
    return `This action returns all userReward`;
  }

  findOneById(userId: number, rewardId: number) {
    const userReward = this.userRewardRepository.findOne({
      where: { userId: userId, rewardId: rewardId },
      relations: {
        user: true,
        reward: true,
      }
    });
    if (!userReward) {
      throw new NotFoundException('User reward not found');
    }
    return userReward;
  }

  findById(userId: number) {
    const userReward = this.userRewardRepository.find({
      where: { userId: userId },
      relations: {
        user: true,
        reward: true,
      }
    });
    if (!userReward) {
      throw new NotFoundException('User reward not found');
    }
    return userReward;
  }

  findOne(id: number) {
    return `This action returns a #${id} userReward`;
  }

  update(id: number, updateUserRewardDto: UpdateUserRewardDto) {
    return `This action updates a #${id} userReward`;
  }

  remove(id: number) {
    return `This action removes a #${id} userReward`;
  }
}
