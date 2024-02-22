import { Module } from "@nestjs/common";
import { MedicalSpecialtyService } from "./medical_specialty.service";
import { MedicalSpecialtyController } from "./medical_specialty.controller";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [MedicalSpecialtyController],
  providers: [MedicalSpecialtyService],
  exports: [MedicalSpecialtyService],
})
export class MedicalSpecialtyModule {}
