import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { username, email, password, role } = req.body;

        try {
            await this.createUserUseCase.execute({
                username,
                email,
                password,
                role
            });

            return res.status(201).send();
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }

    }
}