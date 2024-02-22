import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dtos/create-company.dto";
import { UpdateCompanyDto } from "./dtos/update-company.dto";
import { Company } from "./entities/company.entity";

@ApiTags("Company")
@Controller("company")
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post("")
  async create(@Body() company: CreateCompanyDto) {
    return await this.companyService.create(company);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.companyService.findOneById(+id);
  }

  @Get("")
  async findBy(@Query() filter: Partial<Company>) {
    return await this.companyService.findBy(filter);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return await this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.companyService.remove(+id);
  }
}
