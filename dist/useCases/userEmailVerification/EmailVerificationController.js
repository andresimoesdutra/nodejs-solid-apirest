"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVerificationController = void 0;
class EmailVerificationController {
    constructor(emailVerificationUseCase) {
        this.emailVerificationUseCase = emailVerificationUseCase;
    }
    async handle(req, res) {
        const { email, code } = req.body;
        try {
            await this.emailVerificationUseCase.execute(email, code);
            return res.status(200).send();
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}
exports.EmailVerificationController = EmailVerificationController;
//# sourceMappingURL=EmailVerificationController.js.map