import { Controller, Delete, Headers } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Delete("")
  async remove(@Headers("user") user: User) {
    return await this.userService.delete(user.id);
  }
}
