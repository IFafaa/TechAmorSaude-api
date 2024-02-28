import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "src/modules/company/entities/company.entity";
import { MedicalSpecialty } from "src/modules/medical_specialty/entities/medical_specialty.entity";
import { Region } from "src/modules/region/entities/region.entity";
import { User } from "src/modules/user/entities/user.entity";

const DB = TypeOrmModule.forRoot({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Region, MedicalSpecialty, Company],
  synchronize: true,
});

@Module({
  imports: [
    DB,
    TypeOrmModule.forFeature([User, Region, MedicalSpecialty, Company]),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
