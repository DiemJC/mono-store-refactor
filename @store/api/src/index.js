import { connect } from 'mongoose';
import { app } from './app';
import {} from 'dotenv/config';


const port = process.env.PORT;
const db = process.env.DB; 



app.listen(port,err => {
    if(err) return console.log(`Fallo en el servidor ${err}`);

    connect(db,err => {
        if(err) return console.log(`Error de conexión a la base de datos ${err}`);

        console.log(`Servidor a la escucha por el puerto ${port}`);
        console.log('Conectado a mongodb');
    })
})