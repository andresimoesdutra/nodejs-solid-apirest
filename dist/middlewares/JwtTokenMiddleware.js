"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenMiddleware = void 0;
const User_1 = require("../entity/User");
class JwtTokenMiddleware {
    constructor(jwtProvider, userRepository) {
        this.jwtProvider = jwtProvider;
        this.userRepository = userRepository;
    }
    async authUser(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }
        const token = authHeader.replace("Bearer ", "");
        const verifyToken = this.jwtProvider.verifyToken(token);
        if (!verifyToken) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }
        const decodedToken = this.jwtProvider.decode(token);
        const user = await this.userRepository.findByEmail(decodedToken.email);
        if (user.role === User_1.UserRoleEnum.reader) {
            return res.status(401).json({
                message: "Not authorized to access this endpoint."
            });
        }
        next();
    }
    async authAdmin(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }
        const token = authHeader.replace("Bearer ", "");
        const verifyToken = this.jwtProvider.verifyToken(token);
        if (!verifyToken) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }
        const decodedToken = this.jwtProvider.decode(token);
        const user = await this.userRepository.findByEmail(decodedToken.email);
        if (user.role !== User_1.UserRoleEnum.admin) {
            return res.status(401).json({
                message: "Not authorized to access this endpoint."
            });
        }
        next();
    }
}
exports.JwtTokenMiddleware = JwtTokenMiddleware;
//# sourceMappingURL=JwtTokenMiddleware.js.map