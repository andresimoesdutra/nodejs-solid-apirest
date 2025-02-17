import { CreateUserController } from './CreateUserController';
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UserRepository } from '../../repositories/implementations/UserRepository';
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvidor = new MailtrapMailProvider();
const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailtrapMailProvidor
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }