import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import expressWS from 'express-ws';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';
import { apiv1 } from './routes/apiv1';
import { socket } from './routes/realtime';

export const app = express();

const expressWs = expressWS(app);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(expressWs())

app.use('/apiv1',apiv1);
app.ws('/',(ws,req,next) => {
    ws.on('connect',() => ws.send('connected'))
})

app.use(ErrorMiddleware);

