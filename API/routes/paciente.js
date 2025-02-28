import { Router } from "express";
import { PacienteController } from "../controllers/paciente.js";

export const PacienteRouter = Router();

PacienteRouter.get('/', PacienteController.getAll);

PacienteRouter.post('/', PacienteController.create);

PacienteRouter.patch('/:id', PacienteController.update);

PacienteRouter.delete('/:idpaciente', PacienteController.delete);