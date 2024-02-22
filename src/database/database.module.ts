import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/modules/user/entities/user.entity";

// const mysqlConfig = {
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "root",
//   database: "test",
//   entities: [],
//   synchronize: true,
// };

// const sqliteConfig = {
//   type: "sqlite",
//   database: "../../database.sqlite",
//   entities: [User],
//   synchronize: true,
// };

const DB = TypeOrmModule.forRoot({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "ki32151524",
  database: "techamorsaude",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true,
});

@Module({
  imports: [DB, TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
