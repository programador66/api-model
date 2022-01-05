import { Router } from "express";
import SessionController from "@modules/users/controllers/SessionController";
import {Segments, Joi, celebrate} from 'celebrate';
const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post('/',celebrate({
  [Segments.BODY]: {
    email: Joi.string().required().email(),
    password: Joi.string().required()
  }
})
, sessionController.create)

export default sessionRouter;
