import { UserRoleEnum } from "../../entity/User";

export interface ICreateUserRequestDTO {
    username: string;
    email: string;
    password: string;
    role: UserRoleEnum;
}