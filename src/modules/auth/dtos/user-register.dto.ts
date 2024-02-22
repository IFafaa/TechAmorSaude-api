import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { User } from "src/modules/user/entities/user.entity";

export class UserRegisterDto extends User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Length(8)
  password: string;
}
