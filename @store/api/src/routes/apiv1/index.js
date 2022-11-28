import { Router } from 'express';
import { privat } from './private';

export const api = Router()

api.use('/private',privat);