"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const CreateUserController_1 = require("./CreateUserController");
const MailtrapMailProvider_1 = require("../../providers/implementations/MailtrapMailProvider");
const UserRepository_1 = require("../../repositories/implementations/UserRepository");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const PasswordEncoderProvider_1 = require("../../providers/implementations/PasswordEncoderProvider");
const VerificationCodeProvider_1 = require("../../providers/implementations/VerificationCodeProvider");
const userRepository = new UserRepository_1.UserRepository();
const passwordEncoder = new PasswordEncoderProvider_1.PasswordEncoder();
const mailtrapMailProvidor = new MailtrapMailProvider_1.MailtrapMailProvider();
const verificationCode = new VerificationCodeProvider_1.VerificationCode();
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(userRepository, passwordEncoder, verificationCode, mailtrapMailProvidor);
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
//# sourceMappingURL=config.js.map