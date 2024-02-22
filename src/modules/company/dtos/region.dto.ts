import { IsNotEmpty } from "class-validator";
import { Region } from "src/modules/region/entities/region.entity";

export class RegionDto extends Region {
  @IsNotEmpty()
  label: string;

  @IsNotEmpty()
  id: number;
}
