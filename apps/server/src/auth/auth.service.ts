import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@server/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import { LoginDto } from '@server/utils/dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    
    const payload = {
      username: user!.email,
      sub: {
        name: user!.name,
      },
    };

    return {
      user: {id: user!._id, ...payload},
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '20s',
          secret: process.env.JWT_SECRET_TOKEN,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '1d',
          secret: process.env.JWT_REFRESH_TOKEN,
        })
      },
    };
  }

  async validateUser(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if(user && (await bcrypt.compare(dto.password, user.password))) {
      return user;
    }

    throw new UnauthorizedException();
  }
}
