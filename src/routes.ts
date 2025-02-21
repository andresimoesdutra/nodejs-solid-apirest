import { NextFunction, Request, Response, Router } from "express";
import { createUserController } from "./useCases/userCreate/config";
import { userLoginController } from "./useCases/userLogin/config";
import { jwtTokenMiddleware, userListController } from "./useCases/userList/config";
import { emailVerificationController } from "./useCases/userEmailVerification/config";

const router = Router();

router.post("/auth/create", (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

router.post("/auth/login", (req: Request, res: Response) => {
    return userLoginController.handle(req, res);
});

router.post("/auth/email/verify", (req: Request, res: Response) => {
    return emailVerificationController.handle(req, res);
})

router.get("/user/list", jwtTokenMiddleware.verify.bind(jwtTokenMiddleware), async (req: Request, res: Response, next: NextFunction) => {
    return await userListController.handle(req, res);
});


export { router }