import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import multer from "multer";

import createUserController from "./useCases/User/CreateUser";
import createCompanyController from "./useCases/Company/CreateCompany";

import authenticateUserController from "./useCases/AuthenticateUser";
import authenticateCompanyController from "./useCases/AuthenticateCompany";

import validateEmailController from "./useCases/ValidateEmail";
import recoverUserPasswordController from "./useCases/User/RecoverUserPassword";

const router = Router();

router.get("/", (req, res) =>
  res.json({ message: "Mytm api, access /docs for documentation." })
);

router.post("/users", createUserController.handle);
router.put("/users/recoverPassword", recoverUserPasswordController.handle);

router.post("/company", createCompanyController.handle);

router.post("/validate/email", validateEmailController.handle);

router.post("/usersAuth", authenticateUserController.handle);
router.post("/companyAuth", authenticateCompanyController.handle);

router.use("/docs", swaggerUi.serve);

export default router;
