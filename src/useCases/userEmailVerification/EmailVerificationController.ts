import { Request, Response } from "express";
import { EmailVerificationUseCase } from "./emailVerificationUseCase";

export class EmailVerificationController {
    constructor(
        private emailVerificationUseCase: EmailVerificationUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            await this.emailVerificationUseCase.execute(
                req,
                res
            );

            return res.status(200).send();
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}