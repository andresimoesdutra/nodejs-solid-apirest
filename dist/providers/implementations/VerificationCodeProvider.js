"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationCode = void 0;
class VerificationCode {
    generate() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        let codeStr = "";
        for (let i = 0; i < 6; i++) {
            const char = chars.charAt(Math.floor(Math.random() * chars.length));
            codeStr += char;
        }
        return codeStr;
    }
}
exports.VerificationCode = VerificationCode;
//# sourceMappingURL=VerificationCodeProvider.js.map