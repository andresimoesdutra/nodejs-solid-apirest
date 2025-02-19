import { IPasswordEncoder } from "../IPasswordEncoder";
import bcrypt from "bcryptjs";

export class PasswordEncoder implements IPasswordEncoder {


    encode(raw: string): string {
        return bcrypt.hashSync(raw, 12);
    }

    matches(raw: string, hash: string): boolean {
        return bcrypt.compareSync(raw, hash);
    }

}