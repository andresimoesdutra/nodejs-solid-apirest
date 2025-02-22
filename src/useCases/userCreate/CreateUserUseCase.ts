import { User } from "../../entity/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { PasswordEncoder } from "../../providers/implementations/PasswordEncoderProvider";
import { VerificationCode } from "../../providers/implementations/VerificationCodeProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: UserRepository,
        private passwordEncoder: PasswordEncoder,
        private verificationCode: VerificationCode,
        private mailProvider: IMailProvider,
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = new User();
        user.username = data.username;
        user.email = data.email;
        user.password = this.passwordEncoder.encode(data.password);
        user.role = data.role;
        user.verificationCode = this.verificationCode.generate();


        await this.usersRepository.save(user)

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