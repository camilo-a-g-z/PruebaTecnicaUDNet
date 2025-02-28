import { PacienteModel } from '../models/postgres/paciente.js';
import { validatePaciente, validatePacienteUpdate } from '../schema/paciente.js';

export class PacienteController{
    static async getAll(req, res) {
        try {
            const result = await PacienteModel.findAll();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la consulta de paciente', error);
            res.status(500).json({ message: 'Error en la consulta de paciente' });
        }
    }

    static async create(req, res) {
        try {
            const paciente = validatePaciente(req.body);
            if (paciente.error) {
                return res.status(400).json(paciente.error);
            }
            const result = await PacienteModel.create(paciente);
            res.status(201).json(result);
        } catch (error) {
            console.error('Error en la creación de paciente', error);
            res.status(500).json({ message: 'Error en la creación de paciente' });
        }
    }

    static async update(req, res) {
        try {
            const paciente = validatePacienteUpdate(req.body);
            if (paciente.error) {
                return res.status(400).json(paciente.error);
            }
            const result = await PacienteModel.update(req.params.id, paciente);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la actualización de paciente', error);
            res.status(500).json({ message: 'Error en la actualización de paciente' });
        }
    }

    static async delete(req, res) {
        try {
            const idpaciente = req.params.idpaciente;
            const result = await PacienteModel.delete(idpaciente);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la eliminación de paciente', error);
            res.status(500).json({ message: 'Error en la eliminación de paciente' });
        }
    }

    static async getPacientePorId(req, res) {
        try {
            const idpaciente = req.params.idpaciente;
            const result = await PacienteModel.findById(idpaciente);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la consulta de paciente por id', error);
            res.status(500).json({ message: 'Error en la consulta de paciente por id' });
        }
    }
}