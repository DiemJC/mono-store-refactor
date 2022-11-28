import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';

export const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(ErrorMiddleware);

