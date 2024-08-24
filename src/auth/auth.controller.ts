import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() createUserDto: Record<string, any>) {
    return this.authService.signIn(
      createUserDto.username,
      createUserDto.password,
    );
  }
}
