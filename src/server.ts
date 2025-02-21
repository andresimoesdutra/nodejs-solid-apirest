import { app } from "./app";
import { AppDataSource } from "./data-source";
import { User, UserRoleEnum } from "./entity/User";
import { PasswordEncoder } from "./providers/implementations/PasswordEncoderProvider";
import { UserRepository } from "./repositories/implementations/UserRepository";

AppDataSource.initialize().then(async () => {
    const userRepository = new UserRepository();
    const passwordEncoder = new PasswordEncoder();

    const user = new User();
    user.username = "admin";
    user.email = "admin@gmail.com";
    user.password = passwordEncoder.encode("admin");
    user.isEmailVerified = true;
    user.verificationCode = null;
    user.role = UserRoleEnum.admin;

    await userRepository.save(user);
});

app.listen(8023, () => console.log("\n- Server is running on: http://localhost:8023/ \n"));