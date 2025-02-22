import { User } from "../entity/User";

export interface IUsersRepository {
    save(user: User): Promise<void>;
    delete(id: number): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: number): Promise<User>;
    findAll(): Promise<User[]>;
}