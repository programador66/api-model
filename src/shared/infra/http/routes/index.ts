import { Router } from "express";
import sessionRouter from "@modules/users/http/routes/sessions.routes";
import usersRouter from "@modules/users/http/routes/users.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);

export default routes;
