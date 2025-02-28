import { CitaModel } from "../models/postgres/cita.js";
import { validateCita } from "../schema/cita.js";

export class CitaController{
    static async getAll(req, res) {
        try {
            const result = await CitaModel.findAll();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la consulta de cita', error);
            res.status(500).json({ message: 'Error en la consulta de cita' });
        }
    }

    static async create(req, res) {
        try {
            const cita = validateCita(req.body);
            const result = await CitaModel.create(cita);
            res.status(201).json(result);
        } catch (error) {
            console.error('Error en la creación de cita', error);
            res.status(500).json({ message: 'Error en la creación de cita' });
        }
    }

    static async update(req, res) {
        try {
            const cita = validateCita(req.body);
            const result = await CitaModel.update(cita);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la actualización de cita', error);
            res.status(500).json({ message: 'Error en la actualización de cita' });
        }
    }

    static async delete(req, res) {
        try {
            const idcita = req.params.idcita;
            const result = await CitaModel.delete(idcita);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la eliminación de cita', error);
            res.status(500).json({ message: 'Error en la eliminación de cita' });
        }
    }
}