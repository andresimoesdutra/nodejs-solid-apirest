import { UserListUseCase } from './UserListUseCase';
import { Request, Response } from "express";

export class UserListController {
    constructor(
        private userListUseCase: UserListUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const usersList = await this.userListUseCase.execute(req, res);

            return res.status(200).send(usersList);
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}