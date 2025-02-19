import { User } from "../../entity/User";
import { IJwtProvider } from "../IJwtProvider";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

export class JwtProvider implements IJwtProvider {
    constructor(

    ) { }


    generateToken(user: User): string {
        dotenv.config();

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
                profileImage: user.imageUrl
            },
            process.env.JWT_SECRET,
            { expiresIn: "5m" }
        );

        return token;
    }


    async verifyToken(token: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}