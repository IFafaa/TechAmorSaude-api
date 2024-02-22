import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { EmailService } from "src/common/services/email.service";
import { TokenService } from "src/common/services/token.service";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { CryptService } from "src/common/services/crypt.service";

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    UserModule,
  ],
  providers: [AuthService, EmailService, TokenService, CryptService],
  controllers: [AuthController],
})
export class AuthModule {}
