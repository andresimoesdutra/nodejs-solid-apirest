import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UserByEmailController } from "./UserByEmailController";
import { UserByEmailUseCase } from "./UserByEmailUseCase";

const userRepository = new UserRepository();
const userByEmailUseCase = new UserByEmailUseCase(userRepository);
const userByEmailController = new UserByEmailController(userByEmailUseCase);

export { userByEmailController }