import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'point.sqlite', // ชื่อไฟล์ฐานข้อมูล
      entities: [User], // รายการ Entity ของคุณ
      synchronize: true, // ควบคุมการซิงโครไนซ์กับฐานข้อมูล (ระวังในการใช้งานใน Production)
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
