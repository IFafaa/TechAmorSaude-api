import { DatabaseModule } from "./database/database.module";
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthMiddleware } from "./common/middlewares/auth.middleware";
import { UserModule } from "./modules/user/user.module";
import { RegionModule } from "./modules/region/region.module";
import { MedicalSpecialtyModule } from "./modules/medical_specialty/medical_specialty.module";

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    RegionModule,
    MedicalSpecialtyModule,
  ],
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
        {
          path: "/region",
          method: RequestMethod.GET,
        },
        {
          path: "/medical-specialty",
          method: RequestMethod.GET,
        },
      )
      .forRoutes("*");
  }
}
