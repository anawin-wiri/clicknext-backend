import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reward } from './entities/reward.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RewardService {
  constructor(
    @InjectRepository(Reward)
    private rewardRepository: Repository<Reward>,
  ) { }
  create(createRewardDto: CreateRewardDto) {
    return 'This action adds a new reward';
  }

  async findAll() {
    return await this.rewardRepository.find();
    // return rewards.map((reward) => ({
    //   ...reward,
    //   date: formatDateToThai(reward.date),
    // }));
  }

  async findOne(id: number) {
    const res = await this.rewardRepository.findOne({
      where: { rewardId: id },
    });
    return res;
  }

  async update(id: number) {
    const reward = await this.rewardRepository.findOne({
      where: { rewardId: id },
    })
    if (!reward) {
      throw new NotFoundException('Reward not found');
    }
    reward.rewardAmount = reward.rewardAmount - 1;
    this.rewardRepository.save(reward);
    return reward;

  }

  remove(id: number) {
    return `This action removes a #${id} reward`;
  }
}
