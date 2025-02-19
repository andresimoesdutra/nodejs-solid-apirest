import { User } from "../../entity/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { PasswordEncoder } from "../../providers/implementations/PasswordEncoderProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: UserRepository,
        private passwordEncoder: PasswordEncoder,
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
            subject: "Verifique o seu email",
            body: "<h1>Verifique o seu email para continuar usando o nosso app!</h1>"
        });
    }
}