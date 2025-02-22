import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UserDeleteController } from "./UserDeleteController";
import { UserDeleteUseCase } from "./UserDeleteUseCase";

const userRepository = new UserRepository();
const userDeleteUseCase = new UserDeleteUseCase(userRepository);
const userDeleteController = new UserDeleteController(userDeleteUseCase);

export { userDeleteController }