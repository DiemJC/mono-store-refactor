import { Router } from 'express';
import { byid } from './id';
import { list } from './list';

export const pub = Router();

pub.use('/list',list);
pub.use('/get',byid);