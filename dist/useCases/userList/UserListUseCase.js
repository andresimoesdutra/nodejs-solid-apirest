"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListUseCase = void 0;
class UserListUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(req, res) {
        const usersList = await this.userRepository.findAll();
        const listDTOs = usersList.map(user => {
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
        });
        return listDTOs;
    }
}
exports.UserListUseCase = UserListUseCase;
//# sourceMappingURL=UserListUseCase.js.map