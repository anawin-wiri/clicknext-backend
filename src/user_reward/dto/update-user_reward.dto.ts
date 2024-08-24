import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRewardDto } from './create-user_reward.dto';

export class UpdateUserRewardDto extends PartialType(CreateUserRewardDto) {}
