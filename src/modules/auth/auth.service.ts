import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRegisterDto } from "./dtos/user-register.dto";
import { UserService } from "../user/user.service";
import * as bcrypt from "bcrypt";
import { User } from "../user/entities/user.entity";
import { LoginDto } from "./dtos/login.dto";
import { TokenService } from "../../common/services/token.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUser(user: UserRegisterDto) {
    try {
      if (await this.userService.userIsRegistered({ email: user.email })) {
        throw new BadRequestException({
          message: "Usuario já cadastrado. Tente fazer o login.",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);

      const _user: Omit<User, "id"> = {
        ...user,
        created_at: new Date(),
        password: hashedPassword,
      };

      const userCreated = await this.userService.create(_user);
      return {
        message: "Usuario cadastrado com sucesso!",
        data: {
          id: userCreated.id,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const user = await this.userService.userIsRegistered({
        email: loginDto.email,
      });
      if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
        throw new BadRequestException({
          message: "Verifique seu e-mail ou senha e tente novamente.",
        });
      }
      return {
        data: {
          access_token: await this.tokenService.getTokenUser(user),
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
