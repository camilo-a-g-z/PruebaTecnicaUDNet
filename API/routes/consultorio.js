import { Router } from "express";
import { ConsultorioController } from "../controllers/consultorio.js";

export const ConsultorioRouter = Router();

ConsultorioRouter.get('/', ConsultorioController.getAll);

ConsultorioRouter.post('/', ConsultorioController.create);

ConsultorioRouter.put('/', ConsultorioController.update);

ConsultorioRouter.delete('/:idconsultorio', ConsultorioController.delete);