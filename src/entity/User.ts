import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import dotenv from "dotenv";

dotenv.config();

export enum UserRoleEnum {
    admin = "admin",
    user = "user",
    reader = "reader"
}

@Entity({
    name: process.env.TYPEORM_USER_TABLE_NAME as string
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({
        type: "enum",
        enum: UserRoleEnum,
        default: UserRoleEnum.reader,
        nullable: true
    })
    role: UserRoleEnum

    @Column({
        nullable: true,
        default: false
    })
    isEmailVerified: boolean

    @Column({
        nullable: true
    })
    verificationCode: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
