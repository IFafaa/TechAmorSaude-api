import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/modules/user/entities/user.entity";

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  private async getToken(data: object) {
    return await this.jwtService.signAsync(data, {
      expiresIn: "24h",
      secret: process.env.JWT_SECRET,
    });
  }

  async getTokenUser(user: User) {
    return await this.getToken({ ...user, password: undefined });
  }
}
