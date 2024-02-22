import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { MedicalSpecialtyModule } from "../medical_specialty/medical_specialty.module";

@Module({
  imports: [DatabaseModule, MedicalSpecialtyModule],
  providers: [CompanyService],
  controllers: [CompanyController],
  exports: [CompanyService],
})
export class CompanyModule {}
