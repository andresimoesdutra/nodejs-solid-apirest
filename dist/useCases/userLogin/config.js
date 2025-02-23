"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginController = void 0;
const JwtProvider_1 = require("../../providers/implementations/JwtProvider");
const PasswordEncoderProvider_1 = require("../../providers/implementations/PasswordEncoderProvider");
const UserLoginController_1 = require("./UserLoginController");
const UserLoginUseCase_1 = require("./UserLoginUseCase");
const UserRepository_1 = require("../../repositories/implementations/UserRepository");
const userRepository = new UserRepository_1.UserRepository();
const passwordEncoder = new PasswordEncoderProvider_1.PasswordEncoder();
const jwtProvider = new JwtProvider_1.JwtProvider();
const userLoginUseCase = new UserLoginUseCase_1.UserLoginUseCase(userRepository, passwordEncoder, jwtProvider);
const userLoginController = new UserLoginController_1.UserLoginController(userLoginUseCase);
exports.userLoginController = userLoginController;
//# sourceMappingURL=config.js.map