import { IsNotEmpty } from "class-validator";
import { MedicalSpecialty } from "../entities/medical_specialty.entity";

export class CreateMedicalSpecialtyDto extends MedicalSpecialty {
  @IsNotEmpty()
  label: string;
}
