import { NextFunction, Request, Response, Router } from "express";
import { createUserController } from "./useCases/userCreate/config";
import { userLoginController } from "./useCases/userLogin/config";
import { jwtTokenMiddleware, userListController } from "./useCases/userList/config";
import { emailVerificationController } from "./useCases/userEmailVerification/config";
import { userDeleteController } from "./useCases/userDelete/config";
import { userByEmailController } from "./useCases/userFindByEmail/config";

const router = Router();

// User - Sign up
router.post("/api/auth/create", async (req: Request, res: Response) => {
    return await createUserController.handle(req, res);
});

// User - Login
router.post("/api/auth/login", async (req: Request, res: Response) => {
    return await userLoginController.handle(req, res);
});

// User - Email verification
router.post("/api/auth/email/verify", async (req: Request, res: Response) => {
    return await emailVerificationController.handle(req, res);
});

// Admin - Delete user by ID
router.delete("/api/admin/user/delete", jwtTokenMiddleware.authAdmin.bind(jwtTokenMiddleware), async (req: Request, res: Response) => {
    return await userDeleteController.handle(req, res);
});

// User - List of all users
router.get("/api/find/user/list", jwtTokenMiddleware.authUser.bind(jwtTokenMiddleware), async (req: Request, res: Response) => {
    return await userListController.handle(req, res);
});

router.get("/api/find/user/email", jwtTokenMiddleware.authUser.bind(jwtTokenMiddleware), async (req: Request, res: Response) => {
    return await userByEmailController.handle(req, res);
});

export { router }