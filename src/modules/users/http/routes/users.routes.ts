import { Router } from "express";
import UserController from "@modules/users/controllers/UserController";
import ensureAuthenticated from "@modules/users/http/middleware/ensureAuthenticated";
import { celebrate, Segments,  Joi} from "celebrate";

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/',celebrate({
  [Segments.BODY]: {
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required()
  }
}), userController.create);

usersRouter.get('/teste', ensureAuthenticated,userController.teste);

export default usersRouter;
