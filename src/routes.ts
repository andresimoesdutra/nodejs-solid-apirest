import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/createUser/config";

const router = Router();

router.post("/auth/create", (req: Request, res: Response) => {
    return createUserController.handle(req, res);
});

export { router }