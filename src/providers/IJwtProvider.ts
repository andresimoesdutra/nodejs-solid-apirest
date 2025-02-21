import { JwtPayload } from "jsonwebtoken";
import { User } from "../entity/User";

export interface IJwtProvider {
    sign(user: User): string;
    decode(token: string): JwtPayload;
    verifyToken(token: string): boolean;
}