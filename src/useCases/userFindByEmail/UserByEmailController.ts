import { Request, Response } from "express";
import { UserByEmailUseCase } from "./UserByEmailUseCase";

export class UserByEmailController {
    constructor(
        private userByEmailUseCase: UserByEmailUseCase
    ) { }

    async handle(req: Request, res: Response) {
        const { email } = req.body;

        try {
            const user = await this.userByEmailUseCase.execute(
                email
            );

            return res.status(200).send(user);
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}