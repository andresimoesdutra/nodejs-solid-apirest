"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailVerificationController = void 0;
const EmailVerificationController_1 = require("./EmailVerificationController");
const UserRepository_1 = require("../../repositories/implementations/UserRepository");
const EmailVerificationUseCase_1 = require("./EmailVerificationUseCase");
const userRepository = new UserRepository_1.UserRepository();
const emailVerificationUseCase = new EmailVerificationUseCase_1.EmailVerificationUseCase(userRepository);
const emailVerificationController = new EmailVerificationController_1.EmailVerificationController(emailVerificationUseCase);
exports.emailVerificationController = emailVerificationController;
//# sourceMappingURL=config.js.map