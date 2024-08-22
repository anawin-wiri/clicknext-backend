import { Injectable, Dependencies } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
@Dependencies(UsersService)
export class AuthService {
  constructor(private usersService: UsersService) {} // Inject UsersService
  // ฟังก์ชันอื่น ๆ
}
