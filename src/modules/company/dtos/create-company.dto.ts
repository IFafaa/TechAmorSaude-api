import { Company } from "../entities/company.entity";
import { Region } from "src/modules/region/entities/region.entity";
import {
  ArrayMinSize,
  IsDateString,
  IsNotEmpty,
  ValidateNested,
} from "class-validator";
import { MedicalSpecialtyDto } from "./medical-specialty.dto";
import { Type } from "class-transformer";
import { RegionDto } from "./region.dto";

export class CreateCompanyDto extends Company {
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
  @ValidateNested({ each: true })
  @Type(() => MedicalSpecialtyDto)
  medical_specialties: MedicalSpecialtyDto[];

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Region)
  region: RegionDto;
}
