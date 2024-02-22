import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "src/modules/company/entities/company.entity";
import { MedicalSpecialty } from "src/modules/medical_specialty/entities/medical_specialty.entity";
import { Region } from "src/modules/region/entities/region.entity";
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
  entities: [User, Region, MedicalSpecialty, Company],
  synchronize: true,
});

@Module({
  imports: [DB, TypeOrmModule.forFeature([User, Region, MedicalSpecialty, Company])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
