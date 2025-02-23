"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../entity/User");
class CreateUserUseCase {
    constructor(usersRepository, passwordEncoder, verificationCode, mailProvider) {
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
        this.verificationCode = verificationCode;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }
        const user = new User_1.User();
        user.username = data.username;
        user.email = data.email;
        user.password = this.passwordEncoder.encode(data.password);
        user.role = data.role;
        user.verificationCode = this.verificationCode.generate();
        await this.usersRepository.save(user);
        this.mailProvider.sendMail({
            to: {
                username: data.username,
                email: data.email
            },
            from: {
                username: "Equipe Auvexis",
                email: "auvexis@gmail.com"
            },
            subject: `Olá ${data.username}, verifique o seu email!`,
            body: `<h1>Código de verificação: ${user.verificationCode}</h1>`
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map