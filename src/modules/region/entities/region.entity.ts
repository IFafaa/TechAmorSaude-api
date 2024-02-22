import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("regions")
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  label: string;
}
