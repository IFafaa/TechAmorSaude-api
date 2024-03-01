import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "src/modules/company/entities/company.entity";
import { MedicalSpecialty } from "src/modules/medical_specialty/entities/medical_specialty.entity";
import { Region } from "src/modules/region/entities/region.entity";
import { User } from "src/modules/user/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST || "mysql_db",
      port: (process.env.DB_PORT as unknown as number) || 3307,
      username: process.env.DB_USERNAME || "root",
      password: process.env.DB_PASSWORD || "root_password",
      database: process.env.DB_DATABASE || "techamorsaude",
      entities: [User, Region, MedicalSpecialty, Company],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Region, MedicalSpecialty, Company]),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
