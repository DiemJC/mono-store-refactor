import { Router } from 'express';
import { del } from './delete';
import { nvo } from './new';
import { upd } from './update';

export const privat = Router();

privat.use('/new',nvo);
privat.use('/update',upd);
privat.use('/delete',del);
