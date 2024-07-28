import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "@server/users/users.service";
import { LoginDto, UserDto } from "@server/utils/dto";
import { AuthService } from "./auth.service";

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
}