import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { AppDataSource } from "../../data-source";
import { User, UserRoleEnum } from "../../entity/User";

export class EmailVerificationUseCase {
    constructor(
        private userRepository: UserRepository
    ) { }

    async execute(email: string, code: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found.");
        }

        if (user.verificationCode !== code) {
            throw new Error("Wrong verification code.");
        }

        user.role = UserRoleEnum.user;
        user.isEmailVerified = true;
        user.verificationCode = "";

        await this.userRepository.save(user);
    }
}