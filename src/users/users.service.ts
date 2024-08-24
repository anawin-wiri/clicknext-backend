import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { userId: id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async findOneByUsername(name: string) {
    const user = await this.userRepository.findOne({
      where: { userName: name },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { userId: id },
    })
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.userPoints = updateUserDto.userPoints;
    await this.userRepository.save(user);
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
