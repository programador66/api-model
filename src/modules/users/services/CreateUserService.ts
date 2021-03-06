import { hash } from 'bcryptjs';
import User from '../infra/typeorm/entities/User';

import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface Request {
  username: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {

  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
    ) {}

  async execute({username, email, password}: Request ): Promise<User>{

    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used')
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      username,
      email,
      password: hashedPassword
    });

    return user;
  }
}

export default CreateUserService;
