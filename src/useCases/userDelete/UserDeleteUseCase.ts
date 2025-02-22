import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";

export class UserDeleteUseCase {
    constructor(
        private userRepository: UserRepository
    ) { }

    async execute(id: number) {
        try {
            await this.userRepository.delete(id);
        } catch (err) {
            throw new Error(err.message);
        }
    }
}