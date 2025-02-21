import { User } from "../entity/User";

export interface IJwtProvider {
    sign(user: User): string;
    decode(token: string): string;
    verifyToken(token: string): boolean;
}