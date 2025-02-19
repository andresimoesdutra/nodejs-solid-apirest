import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import { JwtProvider } from "../../providers/implementations/JwtProvider";
import { PasswordEncoder } from "../../providers/implementations/PasswordEncoderProvider";
import { UserLoginController } from "./UserLoginController";
import { UserLoginUseCase } from "./UserLoginUseCase";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const passwordEncoder = new PasswordEncoder();
const jwtProvider = new JwtProvider();

const userLoginUseCase = new UserLoginUseCase(
    userRepository,
    passwordEncoder,
    jwtProvider
);

const userLoginController = new UserLoginController(
    userLoginUseCase
);

export { userLoginController }