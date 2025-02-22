import { UserResponseDTO } from './../../dtos/UserResponseDTO';
import { User } from "../../entity/User";
import { UserRepository } from "../../repositories/implementations/UserRepository";

export class UserByEmailUseCase {
    constructor(
        private userRepository: UserRepository
    ) { }

    async execute(email: string): Promise<UserResponseDTO> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found.");
        }

        const userDTO: UserResponseDTO = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            isEmailVerified: user.isEmailVerified,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }

        return userDTO;
    }
}