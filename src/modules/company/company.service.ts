import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "./entities/company.entity";
import { CreateCompanyDto } from "./dtos/create-company.dto";
import { MedicalSpecialtyService } from "../medical_specialty/medical_specialty.service";

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly repository: Repository<Company>,
    private readonly medicalSpecialtyService: MedicalSpecialtyService,
  ) {}

  async create(_company: CreateCompanyDto): Promise<Company> {
    try {
      _company = {
        ..._company,
        created_at: new Date(),
      };
      const company = await this.repository.create(_company);
      return this.repository.save(company);
    } catch (error) {
      throw error;
    }
  }

  async findOneBy(filter: Partial<Company>): Promise<Company | null> {
    try {
      const company = await this.repository.findOne({ where: filter });
      return company;
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: number): Promise<Company> {
    try {
      const company = await this.repository.findOne({
        where: { id },
        relations: { region: true, medical_specialties: true },
      });
      return company;
    } catch (error) {
      throw error;
    }
  }

  async findBy(filter: Partial<Company>): Promise<Company[]> {
    try {
      const companies = await this.repository.find({
        where: filter,
        relations: { region: true, medical_specialties: true },
      });
      return companies;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, _company: Partial<Company>) {
    try {
      const company = await this.findOneById(id);
      if (!company) {
        return null;
      }

      _company.created_at = company.created_at;
      _company.id = company.id;

      return await this.repository.save(_company);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const company = await this.repository.delete(id);
      return company;
    } catch (error) {
      throw error;
    }
  }
}
