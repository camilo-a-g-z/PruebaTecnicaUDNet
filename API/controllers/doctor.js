import { DoctorModel } from "../models/postgres/doctor.js";
import { validateDoctor, validateDoctorUpdate } from "../schema/doctor.js";

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
            const doctor = validateDoctorUpdate(req.body);
            if (doctor.error) {
                return res.status(400).json(doctor.error);
            }
            const result = await DoctorModel.update(req.params.id, doctor);
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

    static async getDoctorById(req, res) {
        try {
            const iddoctor = req.params.iddoctor;
            const result = await DoctorModel.findById(iddoctor);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la consulta de doctor por id', error);
            res.status(500).json({ message: 'Error en la consulta de doctor por id' });
        }
    }
}