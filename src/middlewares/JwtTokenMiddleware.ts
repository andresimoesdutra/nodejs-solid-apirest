import { NextFunction, Request, Response } from "express";
import { JwtProvider } from "../providers/implementations/JwtProvider";
import { UserRepository } from "../repositories/implementations/UserRepository";
import { UserRoleEnum } from "../entity/User";

export class JwtTokenMiddleware {
    constructor(
        private jwtProvider: JwtProvider,
        private userRepository: UserRepository
    ) { }

    async authUser(req: Request, res: Response, next: NextFunction) {
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

        const decodedToken = this.jwtProvider.decode(token);
        const user = await this.userRepository.findByEmail(decodedToken.email);

        if (user.role === UserRoleEnum.reader) {
            return res.status(401).json({
                message: "Not authorized to access this endpoint."
            });
        }

        next();
    }

    async authPremium(req: Request, res: Response, next: NextFunction) {
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

        const decodedToken = this.jwtProvider.decode(token);
        const user = await this.userRepository.findByEmail(decodedToken.email);

        if (user.role !== UserRoleEnum.premium) {
            return res.status(401).json({
                message: "Not authorized to access this endpoint."
            });
        }

        next();
    }

    async authAdmin(req: Request, res: Response, next: NextFunction) {
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

        const decodedToken = this.jwtProvider.decode(token);
        const user = await this.userRepository.findByEmail(decodedToken.email);

        if (user.role !== UserRoleEnum.admin) {
            return res.status(401).json({
                message: "Not authorized to access this endpoint."
            });
        }

        next();
    }
}