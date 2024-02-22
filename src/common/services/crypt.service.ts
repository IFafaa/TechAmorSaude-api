import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class CryptService {
  private _salt;

  constructor() {
    this.getSalt();
  }

  private async getSalt() {
    this._salt = await bcrypt.genSalt(10);
  }

  async crypt(value: string | Buffer) {
    return bcrypt.hash(value, this._salt);
  }

  async compare(value: string | Buffer, encrypted: string) {
    return await bcrypt.compare(value, encrypted);
  }
}
