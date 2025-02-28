import express from 'express';
import {corsMiddleware} from './middlewares/cors.js';
import { CitaRouter } from './routes/cita.js';

const app = express();
app.use(corsMiddleware());
app.use(express.json());
app.disable('x-powered-by');


app.use('/cita', CitaRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
