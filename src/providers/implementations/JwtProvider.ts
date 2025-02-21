import { User } from "../../entity/User";
import { IJwtProvider } from "../IJwtProvider";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { prependOnceListener } from "process";

export class JwtProvider implements IJwtProvider {
    sign(user: User): string {
        dotenv.config();

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
                subject: "auth",
                issuer: "Auvexis"
            }
        );

        return token;
    }


    decode(token: string): string | null {
        if (!token) return null;

        const cleanToken = token.replace("Bearer ", "");

        const payload = jwt.decode(cleanToken, { json: true });

        return payload ? JSON.stringify(payload) : null;
    }


    verifyToken(token: string): boolean {
        dotenv.config();

        try {
            jwt.verify(
                token,
                process.env.JWT_SECRET,
            );

            return true;
        } catch (err) {
            return false;
        }
    }

}