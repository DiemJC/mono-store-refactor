import { Router } from 'express';
import { SignIn, SignUp } from '../../controllers';
import { privat } from './private';
import { pub } from './public';

export const apiv1 = Router()

apiv1.use('/private',privat);
apiv1.use('/public',pub);
apiv1.use('/signin',SignIn);
apiv1.use('/signup',SignUp);