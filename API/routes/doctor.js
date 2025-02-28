import { Router } from "express";
import { DoctorController } from "../controllers/doctor.js";

export const DoctorRouter = Router();

DoctorRouter.get('/', DoctorController.getAll);

DoctorRouter.post('/', DoctorController.create);

DoctorRouter.patch('/:id', DoctorController.update);

DoctorRouter.delete('/:iddoctor', DoctorController.delete);