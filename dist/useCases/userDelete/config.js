"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDeleteController = void 0;
const UserRepository_1 = require("../../repositories/implementations/UserRepository");
const UserDeleteController_1 = require("./UserDeleteController");
const UserDeleteUseCase_1 = require("./UserDeleteUseCase");
const userRepository = new UserRepository_1.UserRepository();
const userDeleteUseCase = new UserDeleteUseCase_1.UserDeleteUseCase(userRepository);
const userDeleteController = new UserDeleteController_1.UserDeleteController(userDeleteUseCase);
exports.userDeleteController = userDeleteController;
//# sourceMappingURL=config.js.map