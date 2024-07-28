import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '@server/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import User from '@server/users/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: User.schema}])
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}