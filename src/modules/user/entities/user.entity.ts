import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class ClientAuthConfig {
  authenticated: boolean;
  code: string;
}

export class ClientAuth {
  email: ClientAuthConfig;
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column()
  created_at: Date;
}
