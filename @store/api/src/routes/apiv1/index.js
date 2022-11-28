import { Router } from 'express';
import { SignIn, SignUp } from '../../controllers';
import { privat } from './private';
import { pub } from './public';

export const api = Router()

api.use('/private',privat);
api.use('/public',pub);
api.use('/signin',SignIn);
api.use('/signup',SignUp);