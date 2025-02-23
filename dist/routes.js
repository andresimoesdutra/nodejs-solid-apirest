"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const config_1 = require("./useCases/userCreate/config");
const config_2 = require("./useCases/userLogin/config");
const config_3 = require("./useCases/userList/config");
const config_4 = require("./useCases/userEmailVerification/config");
const config_5 = require("./useCases/userDelete/config");
const config_6 = require("./useCases/userFindByEmail/config");
const router = (0, express_1.Router)();
exports.router = router;
// User - Sign up
router.post("/api/auth/create", async (req, res) => {
    return await config_1.createUserController.handle(req, res);
});
// User - Login
router.post("/api/auth/login", async (req, res) => {
    return await config_2.userLoginController.handle(req, res);
});
// User - Email verification
router.post("/api/auth/email/verify", async (req, res) => {
    return await config_4.emailVerificationController.handle(req, res);
});
// Admin - Delete user by ID
router.delete("/api/admin/user/delete", config_3.jwtTokenMiddleware.authAdmin.bind(config_3.jwtTokenMiddleware), async (req, res) => {
    return await config_5.userDeleteController.handle(req, res);
});
// User - List of all users
router.get("/api/find/user/list", config_3.jwtTokenMiddleware.authUser.bind(config_3.jwtTokenMiddleware), async (req, res) => {
    return await config_3.userListController.handle(req, res);
});
router.get("/api/find/user/email", config_3.jwtTokenMiddleware.authUser.bind(config_3.jwtTokenMiddleware), async (req, res) => {
    return await config_6.userByEmailController.handle(req, res);
});
//# sourceMappingURL=routes.js.map