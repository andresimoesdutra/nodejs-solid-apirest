import { UserRoleEnum } from "../entity/User";

export interface UserResponseDTO {
    id: number;
    username: string;
    email: string;
    role: UserRoleEnum;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}