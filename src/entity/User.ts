import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export enum UserRoleEnum {
    admin = "admin",
    premium = "premium",
    user = "user",
    reader = "reader"
}

@Entity({
    name: "users_tb"
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
        nullable: true
    })
    imageUrl: string

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
