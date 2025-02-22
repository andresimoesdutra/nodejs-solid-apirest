import { app } from "./app";
import { AppDataSource } from "./data-source";
import { User, UserRoleEnum } from "./entity/User";
import { PasswordEncoder } from "./providers/implementations/PasswordEncoderProvider";
import { UserRepository } from "./repositories/implementations/UserRepository";
import dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize();

app.listen(process.env.EXPRESS_SERVER_PORT, () => {
    console.log(`\n- Server is running on: http://localhost:${process.env.EXPRESS_SERVER_PORT}/ \n`);
});