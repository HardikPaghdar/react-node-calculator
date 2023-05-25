import { Router } from "express";
import { createValidator } from "express-joi-validation";
import MathController from "../controller/MathController";
import MathSchema from "../schema/MathSchema";

const validator = createValidator();
const routes = Router();

routes.use("/addition", validator.body(MathSchema.additionSchema), MathController.addition);

export default routes;
