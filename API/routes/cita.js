import { Router } from "express";
import { CitaController } from "../controllers/cita.js";

export const CitaRouter = Router();

CitaRouter.get('/', CitaController.getAll);

CitaRouter.post('/', CitaController.create);

CitaRouter.put('/', CitaController.update);

CitaRouter.delete('/:idcita', CitaController.delete);