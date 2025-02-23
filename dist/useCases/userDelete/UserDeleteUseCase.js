"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeleteUseCase = void 0;
class UserDeleteUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        try {
            await this.userRepository.delete(id);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
exports.UserDeleteUseCase = UserDeleteUseCase;
//# sourceMappingURL=UserDeleteUseCase.js.map