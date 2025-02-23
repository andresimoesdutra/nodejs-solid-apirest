"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userListController = exports.jwtTokenMiddleware = void 0;
const JwtTokenMiddleware_1 = require("../../middlewares/JwtTokenMiddleware");
const JwtProvider_1 = require("../../providers/implementations/JwtProvider");
const UserRepository_1 = require("../../repositories/implementations/UserRepository");
const UserListController_1 = require("./UserListController");
const UserListUseCase_1 = require("./UserListUseCase");
const jwtProvider = new JwtProvider_1.JwtProvider();
const userRepository = new UserRepository_1.UserRepository();
const jwtTokenMiddleware = new JwtTokenMiddleware_1.JwtTokenMiddleware(jwtProvider, userRepository);
exports.jwtTokenMiddleware = jwtTokenMiddleware;
const userListUseCase = new UserListUseCase_1.UserListUseCase(userRepository);
const userListController = new UserListController_1.UserListController(userListUseCase);
exports.userListController = userListController;
//# sourceMappingURL=config.js.map