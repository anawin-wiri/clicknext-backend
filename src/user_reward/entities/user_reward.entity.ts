import { Reward } from 'src/reward/entities/reward.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserReward {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  rewardId: number;

  @ManyToOne(() => User, (user) => user.userRewards)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Reward, (reward) => reward.userRewards)
  @JoinColumn({ name: 'rewardId' })
  reward: Reward;

  @CreateDateColumn()
  createAt: Date;
}
