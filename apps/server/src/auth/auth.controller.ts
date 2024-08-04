import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { UsersService } from "@server/users/users.service";
import { LoginDto, UserDto } from "@server/utils/dto";
import { AuthService } from "./auth.service";
import { JwtRefreshGuard } from "./guards/refresh.guard";

@Controller("auth")
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() userDto: UserDto) {
    return await this.userService.create(userDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Request() req: any) {
    return await this.authService.refreshToken(req.user);
  }
}