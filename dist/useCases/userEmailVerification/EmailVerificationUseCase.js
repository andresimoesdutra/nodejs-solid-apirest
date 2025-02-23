"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVerificationUseCase = void 0;
const User_1 = require("../../entity/User");
class EmailVerificationUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email, code) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error("User not found.");
        }
        if (user.verificationCode !== code) {
            throw new Error("Wrong verification code.");
        }
        user.role = User_1.UserRoleEnum.user;
        user.isEmailVerified = true;
        user.verificationCode = "";
        await this.userRepository.save(user);
    }
}
exports.EmailVerificationUseCase = EmailVerificationUseCase;
//# sourceMappingURL=EmailVerificationUseCase.js.map