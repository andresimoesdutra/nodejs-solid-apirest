import { IVerificationCodeProvider } from "../IVerificationCodeProvider";

export class VerificationCode implements IVerificationCodeProvider {
    generate(): string {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        let codeStr = "";

        for (let i = 0; i < 6; i++) {
            const char = chars.charAt(Math.floor(Math.random() * chars.length));
            codeStr += char;
        }

        return codeStr;
    }
}