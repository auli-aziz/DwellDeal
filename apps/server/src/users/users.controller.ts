import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtGuard } from "@server/auth/guards/jwt.guard";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: string) {
    return await this.usersService.findById(id);
  }
}