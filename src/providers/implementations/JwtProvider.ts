import { User } from "../../entity/User";
import { IJwtProvider } from "../IJwtProvider";
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv";
import { prependOnceListener } from "process";

dotenv.config();

export class JwtProvider implements IJwtProvider {
    sign(user: User): string {

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET as string, // Certifique-se de que essa variável está definida
            {
                expiresIn: "5m",
                subject: user.email,
                issuer: process.env.JWT_ISSUER ?? "my-app"
            }
        );

        return token;
    }


    decode(token: string): JwtPayload | null {
        if (!token) return null;

        const cleanToken = token.replace("Bearer ", "");

        const payload = jwt.decode(cleanToken, { json: true });

        return payload ? payload : null;
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