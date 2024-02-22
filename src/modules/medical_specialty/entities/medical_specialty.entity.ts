import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("medical_specialties")
export class MedicalSpecialty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  label: string;
}
