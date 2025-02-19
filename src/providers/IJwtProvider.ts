import { User } from "../entity/User";

export interface IJwtProvider {
    generateToken(user: User): string;
    verifyToken(token: string): Promise<boolean>;
}