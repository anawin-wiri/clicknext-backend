import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
