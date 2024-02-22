import { Injectable } from "@nestjs/common";
import { CreateMedicalSpecialtyDto } from "./dto/create-medical_specialty.dto";
import { MedicalSpecialty } from "./entities/medical_specialty.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class MedicalSpecialtyService {
  constructor(
    @InjectRepository(MedicalSpecialty)
    private readonly repository: Repository<MedicalSpecialty>,
  ) {}

  async create(createMedicalSpecialtyDto: CreateMedicalSpecialtyDto) {
    try {
      const medicalSpecialty = await this.repository.create(
        createMedicalSpecialtyDto,
      );
      return this.repository.save(medicalSpecialty);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const regions = await this.repository.find();
      return regions;
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: number) {
    try {
      const medicalSpecialty = await this.repository.findOne({ where: { id } });
      return medicalSpecialty;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, _medicalSpecialty: Partial<MedicalSpecialty>) {
    try {
      const medicalSpecialty = await this.findOneById(id);
      if (!medicalSpecialty) {
        return null;
      }
      await this.repository.update(id, _medicalSpecialty);
      const updatedMedicalSpecialty = await this.findOneById(id);

      return updatedMedicalSpecialty;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const region = await this.repository.delete(id);
      return region;
    } catch (error) {
      throw error;
    }
  }
}
