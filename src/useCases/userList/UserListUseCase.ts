import { UserResponseDTO } from './../../dtos/UserResponseDTO';
import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { User } from "../../entity/User";

export class UserListUseCase {
    constructor(
        private userRepository: UserRepository
    ) { }

    async execute(req: Request, res: Response): Promise<UserResponseDTO[]> {
        const usersList = await this.userRepository.findAll();

        const listDTOs: UserResponseDTO[] = usersList.map(user => {
            const userDTO: UserResponseDTO = {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
                isEmailVerified: user.isEmailVerified,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            };

            return userDTO;
        });

        return listDTOs
    }
}