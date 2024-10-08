import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRewardService } from './user_reward.service';
import { CreateUserRewardDto } from './dto/create-user_reward.dto';
import { UpdateUserRewardDto } from './dto/update-user_reward.dto';

@Controller('user-reward')
export class UserRewardController {
  constructor(private readonly userRewardService: UserRewardService) { }

  @Post()
  create(@Body() createUserRewardDto: CreateUserRewardDto) {
    return this.userRewardService.create(createUserRewardDto);
  }

  @Get()
  findAll() {
    return this.userRewardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRewardService.findOne(+id);
  }

  @Get('user/:userId/reward/:rewardId')
  findOneById(
    @Param('userId') userId: number,
    @Param('rewardId') rewardId: number
  ) {
    return this.userRewardService.findOneById(userId, rewardId);
  }

  @Get('user/:userId')
  findById(@Param('userId') userId: number,) {
    return this.userRewardService.findById(userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserRewardDto: UpdateUserRewardDto,
  ) {
    return this.userRewardService.update(+id, updateUserRewardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRewardService.remove(+id);
  }
}
