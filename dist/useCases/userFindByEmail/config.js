"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userByEmailController = void 0;
const UserRepository_1 = require("../../repositories/implementations/UserRepository");
const UserByEmailController_1 = require("./UserByEmailController");
const UserByEmailUseCase_1 = require("./UserByEmailUseCase");
const userRepository = new UserRepository_1.UserRepository();
const userByEmailUseCase = new UserByEmailUseCase_1.UserByEmailUseCase(userRepository);
const userByEmailController = new UserByEmailController_1.UserByEmailController(userByEmailUseCase);
exports.userByEmailController = userByEmailController;
//# sourceMappingURL=config.js.map