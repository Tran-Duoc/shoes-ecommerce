import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  async getUser(@Param('id') id: number) {
    console.log(id);
    return this.userService.getUser(id);
  }
}
