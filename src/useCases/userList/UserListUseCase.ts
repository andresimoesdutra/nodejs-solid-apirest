import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { User } from "../../entity/User";

export class UserListUseCase {
    constructor(
        private userRepository: UserRepository
    ) { }

    async execute(req: Request, res: Response): Promise<User[]> {
        const usersList = await this.userRepository.findAll();
        return usersList;
    }
}