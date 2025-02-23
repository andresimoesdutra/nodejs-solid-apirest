"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeleteController = void 0;
class UserDeleteController {
    constructor(userDeleteUseCase) {
        this.userDeleteUseCase = userDeleteUseCase;
    }
    async handle(req, res) {
        const { id } = req.body;
        try {
            await this.userDeleteUseCase.execute(id);
            return res.status(200).send();
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}
exports.UserDeleteController = UserDeleteController;
//# sourceMappingURL=UserDeleteController.js.map