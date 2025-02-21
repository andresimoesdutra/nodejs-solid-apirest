import { CreateUserController } from './CreateUserController';
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UserRepository } from '../../repositories/implementations/UserRepository';
import { CreateUserUseCase } from "./CreateUserUseCase";
import { PasswordEncoder } from '../../providers/implementations/PasswordEncoderProvider';
import { VerificationCode } from '../../providers/implementations/VerificationCodeProvider';

const userRepository = new UserRepository();
const passwordEncoder = new PasswordEncoder();
const mailtrapMailProvidor = new MailtrapMailProvider();
const verificationCode = new VerificationCode();

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    passwordEncoder,
    verificationCode,
    mailtrapMailProvidor
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserController }