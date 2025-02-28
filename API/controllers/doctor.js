import { DoctorModel } from "../models/postgres/doctor.js";
import { validateDoctor } from "../schema/doctor.js";

export class DoctorController{
    static async getAll(req, res) {
        try {
            const result = await DoctorModel.findAll();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la consulta de doctor', error);
            res.status(500).json({ message: 'Error en la consulta de doctor' });
        }
    }

    static async create(req, res) {
        try {
            const doctor = validateDoctor(req.body);
            if (doctor.error) {
                return res.status(400).json(doctor.error);
            }
            const result = await DoctorModel.create(doctor);
            res.status(201).json(result);
        } catch (error) {
            console.error('Error en la creación de doctor', error);
            res.status(500).json({ message: 'Error en la creación de doctor' });
        }
    }

    static async update(req, res) {
        try {
            const doctor = validateDoctor(req.body);
            const result = await DoctorModel.update(doctor.data);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la actualización de doctor', error);
            res.status(500).json({ message: 'Error en la actualización de doctor' });
        }
    }

    static async delete(req, res) {
        try {
            const iddoctor = req.params.iddoctor;
            const result = await DoctorModel.delete(iddoctor);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la eliminación de doctor', error);
            res.status(500).json({ message: 'Error en la eliminación de doctor' });
        }
    }
}