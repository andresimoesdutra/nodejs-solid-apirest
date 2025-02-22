import { Request, Response } from "express";
import { EmailVerificationUseCase } from "./EmailVerificationUseCase";

export class EmailVerificationController {
    constructor(
        private emailVerificationUseCase: EmailVerificationUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, code } = req.body;

        try {
            await this.emailVerificationUseCase.execute(
                email,
                code
            );

            return res.status(200).send();
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}