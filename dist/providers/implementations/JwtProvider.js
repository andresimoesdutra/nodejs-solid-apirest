"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtProvider = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class JwtProvider {
    sign(user) {
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }, process.env.JWT_SECRET, // Certifique-se de que essa variável está definida
        {
            expiresIn: "5m",
            subject: user.email,
            issuer: process.env.JWT_ISSUER ?? "my-app"
        });
        return token;
    }
    decode(token) {
        if (!token)
            return null;
        const cleanToken = token.replace("Bearer ", "");
        const payload = jsonwebtoken_1.default.decode(cleanToken, { json: true });
        return payload ? payload : null;
    }
    verifyToken(token) {
        dotenv_1.default.config();
        try {
            jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            return true;
        }
        catch (err) {
            return false;
        }
    }
}
exports.JwtProvider = JwtProvider;
//# sourceMappingURL=JwtProvider.js.map