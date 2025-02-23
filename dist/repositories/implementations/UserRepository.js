"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const data_source_1 = require("../../data-source");
const User_1 = require("../../entity/User");
class UserRepository {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
    async save(user) {
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
    async delete(id) {
        const user = await this.userRepository.findOneBy({ id: id });
        if (!user) {
            throw new Error("User not found.");
        }
        await this.userRepository.delete(id);
    }
    async findById(id) {
        const user = await this.userRepository.findOneBy({ id: id });
        if (!user) {
            throw new Error("User not found.");
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOneBy({ email: email });
        return user;
    }
    async findAll() {
        return await this.userRepository.find();
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map