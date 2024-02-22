import { MedicalSpecialty } from "src/modules/medical_specialty/entities/medical_specialty.entity";
import { Region } from "src/modules/region/entities/region.entity";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("company")
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  company_name: string;

  @Column({ length: 100 })
  fantasy_name: string;

  @Column({ length: 14 })
  cnpj: string;

  @ManyToOne(() => Region)
  @JoinColumn({ name: "region_id" })
  region: Region;

  @Column()
  inauguration_date: Date;

  @Column()
  active: boolean;

  @ManyToMany(() => MedicalSpecialty, (medicalSpecialty) => medicalSpecialty)
  @JoinTable({
    name: "company_medical_specialty",
    joinColumn: {
      name: "company_id",
      referencedColumnName: "id",
      foreignKeyConstraintName: "company_medical_specialty_company_id",
    },
    inverseJoinColumn: {
      name: "medical_specialty_id",
      referencedColumnName: "id",
      foreignKeyConstraintName:
        "company_medical_specialty_medical_specialty_id",
    },
  })
  medical_specialties: MedicalSpecialty[];

  @Column()
  created_at: Date;
}
