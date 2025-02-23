"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const data_source_1 = require("./data-source");
const User_1 = require("./entity/User");
const PasswordEncoderProvider_1 = require("./providers/implementations/PasswordEncoderProvider");
const UserRepository_1 = require("./repositories/implementations/UserRepository");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
data_source_1.AppDataSource.initialize().then(async () => {
    const userRepository = new UserRepository_1.UserRepository();
    const passwordEncoder = new PasswordEncoderProvider_1.PasswordEncoder();
    const admin = new User_1.User();
    admin.username = "admin";
    admin.email = "admin@gmail.com";
    admin.isEmailVerified = true;
    admin.verificationCode = "";
    admin.role = User_1.UserRoleEnum.admin;
    admin.password = passwordEncoder.encode("admin");
    await userRepository.save(admin);
});
app_1.app.listen(process.env.EXPRESS_SERVER_PORT, () => {
    console.log(`\n- Server is running on: http://localhost:${process.env.EXPRESS_SERVER_PORT}/ \n`);
});
//# sourceMappingURL=server.js.map