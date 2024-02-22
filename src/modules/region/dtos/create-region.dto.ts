import { IsNotEmpty } from "class-validator";
import { Region } from "../entities/region.entity";

export class CreateRegionDto extends Region {
  @IsNotEmpty()
  label: string;
}
