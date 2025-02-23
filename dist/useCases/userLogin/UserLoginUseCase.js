"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginUseCase = void 0;
class UserLoginUseCase {
    constructor(userRepository, passwordEncoder, jwtProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtProvider = jwtProvider;
    }
    async execute(data) {
        const user = await this.userRepository.findByEmail(data.email);
        if (!user) {
            throw new Error("User not found.");
        }
        const passwordBool = this.passwordEncoder.matches(data.password, user.password);
        if (!passwordBool) {
            throw new Error("Incorrect Password.");
        }
        if (!user.isEmailVerified) {
            throw new Error("Please verify your email before logging in.");
        }
        const token = this.jwtProvider.sign(user);
        return token;
    }
}
exports.UserLoginUseCase = UserLoginUseCase;
//# sourceMappingURL=UserLoginUseCase.js.map