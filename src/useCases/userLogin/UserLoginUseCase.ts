import { JwtProvider } from "../../providers/implementations/JwtProvider";
import { PasswordEncoder } from "../../providers/implementations/PasswordEncoderProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { IUserLoginRequestDTO } from "./UserLoginDTO";

export class UserLoginUseCase {
    constructor(
        private userRepository: UserRepository,
        private passwordEncoder: PasswordEncoder,
        private jwtProvider: JwtProvider
    ) { }


    async execute(data: IUserLoginRequestDTO): Promise<string> {
        const user = await this.userRepository.findByEmail(data.email);

        if (!user) {
            throw new Error("User not found.");
        }

        const passwordBool = this.passwordEncoder.matches(
            data.password,
            user.password
        );

        if (!passwordBool) {
            throw new Error("Incorrect Password.");
        }

        if (!user.isEmailVerified) {
            throw new Error("Please verify your email before logging in.")
        }

        const token = this.jwtProvider.sign(user);

        return token;
    }

}