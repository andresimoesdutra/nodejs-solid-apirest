"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListController = void 0;
class UserListController {
    constructor(userListUseCase) {
        this.userListUseCase = userListUseCase;
    }
    async handle(req, res) {
        try {
            const usersList = await this.userListUseCase.execute(req, res);
            return res.status(200).send(usersList);
        }
        catch (err) {
            return res.status(400).json({
                message: err.message || "Something went wrong."
            });
        }
    }
}
exports.UserListController = UserListController;
//# sourceMappingURL=UserListController.js.map