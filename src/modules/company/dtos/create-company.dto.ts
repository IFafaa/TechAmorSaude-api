import { ArrayMinSize, IsDateString, IsNotEmpty } from "class-validator";

import { MedicalSpecialty } from "src/modules/medical_specialty/entities/medical_specialty.entity";
import { Region } from "src/modules/region/entities/region.entity";

export class CreateCompanyDto {
  @IsNotEmpty()
  company_name: string;

  @IsNotEmpty()
  fantasy_name: string;

  @IsNotEmpty()
  active: boolean;

  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  @IsDateString()
  inauguration_date: Date;

  @IsNotEmpty()
  @ArrayMinSize(1)
  medical_specialties: MedicalSpecialty[];

  @IsNotEmpty()
  region: Region;
}
