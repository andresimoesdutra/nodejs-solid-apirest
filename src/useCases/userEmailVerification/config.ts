import { EmailVerificationController } from "./EmailVerificationController";
import { UserRepository } from '../../repositories/implementations/UserRepository';
import { EmailVerificationUseCase } from "./emailVerificationUseCase";

const userRepository = new UserRepository();
const emailVerificationUseCase = new EmailVerificationUseCase(userRepository);
const emailVerificationController = new EmailVerificationController(emailVerificationUseCase);

export { emailVerificationController }