import { NextFunction, Request, Response } from "express";
import { JwtProvider } from "../providers/implementations/JwtProvider";

export class JwtTokenMiddleware {
    constructor(
        private jwtProvider: JwtProvider
    ) { }

    async verify(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }

        const token = authHeader.replace("Bearer ", "");
        const verifyToken = this.jwtProvider.verifyToken(token);

        if (!verifyToken) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }

        next();
    }
}