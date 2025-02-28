import { Router } from "express";
import { DoctorController } from "../controllers/doctor.js";

export const DoctorRouter = Router();

DoctorRouter.get('/', DoctorController.getAll);

DoctorRouter.post('/', DoctorController.create);

DoctorRouter.put('/', DoctorController.update);

DoctorRouter.delete('/:iddoctor', DoctorController.delete);