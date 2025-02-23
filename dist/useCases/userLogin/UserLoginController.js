"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginController = void 0;
class UserLoginController {
    constructor(userLoginUseCase) {
        this.userLoginUseCase = userLoginUseCase;
    }
    async handle(req, res) {
        const { email, password } = req.body;
        try {
            const token = await this.userLoginUseCase.execute({
                email,
                password
            });
            return res.status(200).json({
                accessToken: token
            });
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}
exports.UserLoginController = UserLoginController;
//# sourceMappingURL=UserLoginController.js.map