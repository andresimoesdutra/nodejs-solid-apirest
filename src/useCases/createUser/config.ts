import { CreateUserController } from './CreateUserController';
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UserRepository } from '../../repositories/implementations/UserRepository';
import { CreateUserUseCase } from "./CreateUserUseCase";
import { PasswordEncoder } from '../../providers/implementations/PasswordEncoderProvider';

const userRepository = new UserRepository();
const passwordEncoder = new PasswordEncoder();
const mailtrapMailProvidor = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    passwordEncoder,
    mailtrapMailProvidor
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserController }