import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalSpecialtyService } from './medical_specialty.service';
import { CreateMedicalSpecialtyDto } from './dtos/create-medical_specialty.dto';
import { UpdateMedicalSpecialtyDto } from './dtos/update-medical_specialty.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Medical Specialties")
@Controller('medical-specialty')
export class MedicalSpecialtyController {
  constructor(private readonly medicalSpecialtyService: MedicalSpecialtyService) {}

  @Post()
  create(@Body() createMedicalSpecialtyDto: CreateMedicalSpecialtyDto) {
    return this.medicalSpecialtyService.create(createMedicalSpecialtyDto);
  }

  @Get()
  findAll() {
    return this.medicalSpecialtyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalSpecialtyService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalSpecialtyDto: UpdateMedicalSpecialtyDto) {
    return this.medicalSpecialtyService.update(+id, updateMedicalSpecialtyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalSpecialtyService.remove(+id);
  }
}
