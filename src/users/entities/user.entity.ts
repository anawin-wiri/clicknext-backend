import { UserReward } from 'src/user_reward/entities/user_reward.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  userName: string;

  @Column()
  userPassword: string;

  @Column()
  userFirstName: string;

  @Column()
  userLastName: string;

  @Column()
  userPoints: number;

  @OneToMany(() => UserReward, (userReward) => userReward.user)
  userRewards: UserReward[];
}
