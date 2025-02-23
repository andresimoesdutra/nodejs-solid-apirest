"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserByEmailController = void 0;
class UserByEmailController {
    constructor(userByEmailUseCase) {
        this.userByEmailUseCase = userByEmailUseCase;
    }
    async handle(req, res) {
        const { email } = req.body;
        try {
            const user = await this.userByEmailUseCase.execute(email);
            return res.status(200).send(user);
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}
exports.UserByEmailController = UserByEmailController;
//# sourceMappingURL=UserByEmailController.js.map