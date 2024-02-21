import { DatabaseModule } from "./database/database.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthMiddleware } from "./common/middlewares/auth.middleware";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [DatabaseModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        "/auth/register",
        "/auth/login",
      )
      .forRoutes("*");
  }
}
