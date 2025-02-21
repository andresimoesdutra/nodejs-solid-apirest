import { JwtTokenMiddleware } from "../../middlewares/JwtTokenMiddleware";
import { JwtProvider } from "../../providers/implementations/JwtProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UserListController } from "./UserListController";
import { UserListUseCase } from "./UserListUseCase";

const jwtProvider = new JwtProvider();
const userRepository = new UserRepository();
const jwtTokenMiddleware = new JwtTokenMiddleware(jwtProvider, userRepository);

const userListUseCase = new UserListUseCase(userRepository);
const userListController = new UserListController(userListUseCase);

export { jwtTokenMiddleware, userListController }