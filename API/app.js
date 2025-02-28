import express from 'express';
import {corsMiddleware} from './middlewares/cors.js';
import { CitaRouter } from './routes/cita.js';
import { ConsultorioRouter } from './routes/consultorio.js';
import { DoctorRouter } from './routes/doctor.js';
import { PacienteRouter } from './routes/paciente.js';
import { PersonaRouter } from './routes/persona.js';


const app = express();
app.use(corsMiddleware());
app.use(express.json());
app.disable('x-powered-by');


app.use('/cita', CitaRouter);
app.use('/consultorio', ConsultorioRouter);
app.use('/doctor', DoctorRouter);
app.use('/paciente', PacienteRouter);
app.use('/persona', PersonaRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
