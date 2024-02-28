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

  async create(_company: CreateCompanyDto) {
    try {
      const company: Omit<Company, "id"> = {
        ..._company,
        created_at: new Date(),
        medical_specialties: _company.medical_specialties.map((f) => ({
          id: f,
        })) as any,
      };

      const companyCreated = await this.repository.create(company);
      await this.repository.save(companyCreated);
      return {
        data: {
          id: companyCreated.id,
        },
      };
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
        relations: { region: true, medical_specialties: true },
      });
      if (filter.company_name || filter.fantasy_name) {
        return companies.filter(
          (company) =>
            company.company_name.includes(filter.company_name) ||
            company.fantasy_name.includes(filter.fantasy_name),
        );
      }
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

      _company.id = company.id;
      _company.medical_specialties = _company.medical_specialties.map((f) => ({
        id: f,
      })) as any;

      await this.repository.save(_company);
      return {
        data: {
          id: _company.id,
        },
      };
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
