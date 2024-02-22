import { Injectable } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Region } from "./entities/region.entity";
import { Repository } from "typeorm";

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region) private readonly repository: Repository<Region>,
  ) {}

  async create(createRegionDto: CreateRegionDto) {
    try {
      const region = await this.repository.create(createRegionDto);
      return this.repository.save(region);
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
      const region = await this.repository.findOne({ where: { id } });
      return region;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, _region: Partial<Region>) {
    try {
      const region = await this.findOneById(id);
      if (!region) {
        return null;
      }
      await this.repository.update(id, _region);
      const updatedRegion = await this.findOneById(id);

      return updatedRegion;
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
