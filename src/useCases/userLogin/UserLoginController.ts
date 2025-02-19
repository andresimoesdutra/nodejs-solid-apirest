import { Request, Response } from "express";
import { UserLoginUseCase } from "./UserLoginUseCase";

export class UserLoginController {
    constructor(
        private userLoginUseCase: UserLoginUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        try {
            const token = await this.userLoginUseCase.execute({
                email,
                password
            });

            return res.status(200).json({
                accessToken: token
            });
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}