"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordEncoder = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class PasswordEncoder {
    encode(raw) {
        return bcryptjs_1.default.hashSync(raw, 12);
    }
    matches(raw, hash) {
        return bcryptjs_1.default.compareSync(raw, hash);
    }
}
exports.PasswordEncoder = PasswordEncoder;
//# sourceMappingURL=PasswordEncoderProvider.js.map