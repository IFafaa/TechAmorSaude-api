import { IsNotEmpty } from "class-validator";
import { MedicalSpecialty } from "src/modules/medical_specialty/entities/medical_specialty.entity";

export class MedicalSpecialtyDto extends MedicalSpecialty {
  @IsNotEmpty()
  
  label: string;

  @IsNotEmpty()
  
  id: number;
}
