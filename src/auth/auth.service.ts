import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService, // ตรวจสอบว่าคุณกำลัง inject JwtService อย่างถูกต้อง
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isMatch = password === user.userPassword;
    if (!isMatch) {
      throw new UnauthorizedException('Passwords do not match');
    }
    const payload = { sub: user };
    return {
      access_token: await this.jwtService.signAsync(payload), // ใช้งาน jwtService
    };
  }
}
