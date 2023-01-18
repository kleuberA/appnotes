import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config.js';
import notasRoutes from './routes/notas.js';

const app = express();
const PORT = process.env.PORT || 400;
app.use(express.json());
app.use(cors());

app.use('/', notasRoutes);

app.listen(PORT, () =>{
    console.log('!!!');
})