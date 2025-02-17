import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        dotenv.config();

        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        })
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