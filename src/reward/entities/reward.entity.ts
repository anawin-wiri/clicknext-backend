import { UserReward } from 'src/user_reward/entities/user_reward.entity';
import {

  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reward {
  @PrimaryGeneratedColumn()
  rewardId: number;

  @Column()
  rewardName: string;

  @Column()
  rewardDescription: string;

  @Column()
  rewardConstaints: string;

  @Column()
  rewardPoint: number;

  @Column({
    type: 'datetime',
  })
  startDate: Date;

  @Column({
    type: 'datetime',
  })
  endDate: Date;

  @Column()
  rewardImg: string;

  @Column()
  rewardAmount: number;

  @OneToMany(() => UserReward, (userReward) => userReward.reward)
  userRewards: UserReward[];
}
