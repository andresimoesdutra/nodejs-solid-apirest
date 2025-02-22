import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        const mailHost = process.env.NODEMAILER_HOST as string;
        const mailPort = Number(process.env.NODEMAILER_PORT);
        const mailUser = process.env.NODEMAILER_USER as string;
        const mailPassword = process.env.NODEMAILER_PASSWORD as string;

        this.transporter = nodemailer.createTransport({
            host: mailHost,
            port: mailPort,
            auth: {
                user: mailUser,
                pass: mailPassword
            }
        });
    }

    async sendMail(message: IMessage): Promise<void> {
        this.transporter.sendMail({
            to: {
                name: message.to.username,
                address: message.to.email
            },
            from: {
                name: message.from.username,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }

}