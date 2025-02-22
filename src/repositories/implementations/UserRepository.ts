import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import { IUsersRepository } from "../IUsersRepository";
import { Repository } from 'typeorm';

export class UserRepository implements IUsersRepository {
    userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }


    async save(user: User): Promise<void> {
        if (!user.id) {
            const userAlreadyExistByUsername = await this.userRepository.findOneBy({ username: user.username });
            const userAlreadyExistByEmail = await this.userRepository.findOneBy({ email: user.email });

            if (userAlreadyExistByUsername) {
                throw new Error("User with this username already exists.");
            }

            if (userAlreadyExistByEmail) {
                throw new Error("User with this email already exists.");
            }
        }

        await this.userRepository.save(user);
    }


    async delete(id: number): Promise<void> {
        const user = await this.userRepository.findOneBy({ id: id });

        if (!user) {
            throw new Error("User not found.");
        }

        await this.userRepository.delete(id);
    }


    async findById(id: number): Promise<User> {
        const user = await this.userRepository.findOneBy({ id: id });

        if (!user) {
            throw new Error("User not found.");
        }

        return user;
    }


    async findByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOneBy({ email: email });

        return user;
    }


    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}