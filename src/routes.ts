import { NextFunction, Request, Response, Router } from "express";
import { createUserController } from "./useCases/userCreate/config";
import { userLoginController } from "./useCases/userLogin/config";
import { jwtTokenMiddleware, userListController } from "./useCases/userList/config";
import { emailVerificationController } from "./useCases/userEmailVerification/config";

const router = Router();

router.post("/api/auth/create", (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

router.post("/api/auth/login", (req: Request, res: Response) => {
    return userLoginController.handle(req, res);
});

router.post("/api/auth/email/verify", (req: Request, res: Response) => {
    return emailVerificationController.handle(req, res);
})

router.get("/api/find/user/list", jwtTokenMiddleware.authUser.bind(jwtTokenMiddleware), async (req: Request, res: Response) => {
    return await userListController.handle(req, res);
});

export { router }