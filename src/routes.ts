import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/createUser/config";
import { userLoginController } from "./useCases/userLogin/config";

const router = Router();

router.post("/auth/create", (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

router.post("/auth/login", (req: Request, res: Response) => {
    return userLoginController.handle(req, res);
});

export { router }