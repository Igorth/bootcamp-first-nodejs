import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function helloTypescript(request: Request, response: Response) {
  const user = createUser({
    email: 'igor@igor.com.br',
    password: '12314',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      {
        title: 'Javascript',
        experience: 100,
      }
    ]
  });

  return response.json(user)
}