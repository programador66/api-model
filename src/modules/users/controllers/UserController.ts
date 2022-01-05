import {Request, Response} from 'express';
import { container } from 'tsyringe';

import { classToClass } from 'class-transformer';

import CreateUserService from '../services/CreateUserService';


class UserController {

  async create(request: Request, response: Response): Promise<Response> {

    const {username, email, password} = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({username,email,password});

    return response.status(201).json({user: classToClass(user)});

  }

  async teste(request: Request, response: Response) {
    return response.send("work");
  }
}

export default UserController;
