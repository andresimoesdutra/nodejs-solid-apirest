"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailtrapMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class MailtrapMailProvider {
    constructor() {
        const mailHost = process.env.NODEMAILER_HOST;
        const mailPort = Number(process.env.NODEMAILER_PORT);
        const mailUser = process.env.NODEMAILER_USER;
        const mailPassword = process.env.NODEMAILER_PASSWORD;
        this.transporter = nodemailer_1.default.createTransport({
            host: mailHost,
            port: mailPort,
            auth: {
                user: mailUser,
                pass: mailPassword
            }
        });
    }
    async sendMail(message) {
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
exports.MailtrapMailProvider = MailtrapMailProvider;
//# sourceMappingURL=MailtrapMailProvider.js.map