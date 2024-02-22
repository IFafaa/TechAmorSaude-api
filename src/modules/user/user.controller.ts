import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("")
  async remove(@Body() user: Omit<User, "id">) {
    return await this.userService.create(user);
  }
}
