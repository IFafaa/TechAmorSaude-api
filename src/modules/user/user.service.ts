import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async create(_user: Omit<User, "id">): Promise<User> {
    try {
      const user = await this.repository.create(_user);
      return this.repository.save(user);
    } catch (error) {
      throw error;
    }
  }

  async findOneBy(filter: Partial<User>): Promise<User | null> {
    try {
      const user = await this.repository.findOne({ where: filter });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async userIsRegistered(options: { email: string }): Promise<User | null> {
    try {
      const hasEmailRegistered = options.email
        ? await this.findOneBy({ email: options.email })
        : null;
      return hasEmailRegistered ?? null;
    } catch (error) {

      throw error;
    }
  }
}
