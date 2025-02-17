import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "64f8946703e2c1",
                pass: "0922ba18f4fab2"
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