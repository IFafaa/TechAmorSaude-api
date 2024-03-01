import { IsNotEmpty, Length } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(8)
  password: string;
}
