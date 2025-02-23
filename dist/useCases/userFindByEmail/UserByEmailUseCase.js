"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserByEmailUseCase = void 0;
class UserByEmailUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error("User not found.");
        }
        const userDTO = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            isEmailVerified: user.isEmailVerified,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
        return userDTO;
    }
}
exports.UserByEmailUseCase = UserByEmailUseCase;
//# sourceMappingURL=UserByEmailUseCase.js.map