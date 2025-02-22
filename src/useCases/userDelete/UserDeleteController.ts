import { Request, Response } from "express";
import { UserDeleteUseCase } from "./UserDeleteUseCase";

export class UserDeleteController {
    constructor(
        private userDeleteUseCase: UserDeleteUseCase
    ) { }

    async handle(req: Request, res: Response) {
        const { id } = req.body;

        try {
            await this.userDeleteUseCase.execute(
                id
            )

            return res.status(200).send();
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}