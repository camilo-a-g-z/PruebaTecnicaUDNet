import {PersonaModel} from '../models/postgres/persona.js';
import {validatePersona} from '../schema/persona.js';

export class PersonaController{
    static async getAll(req, res) {
        try {
            const result = await PersonaModel.findAll();
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la consulta de persona', error);
            res.status(500).json({ message: 'Error en la consulta de persona' });
        }
    }

    static async create(req, res) {
        try {
            const persona = validatePersona(req.body);
            if (persona.error) {
                return res.status(400).json(persona.error);
            }
            const result = await PersonaModel.create(persona);
            res.status(201).json(result);
        } catch (error) {
            console.error('Error en la creación de persona', error);
            res.status(500).json({ message: 'Error en la creación de persona' });
        }
    }

    static async update(req, res) {
        try {
            const persona = validatePersona(req.body);
            const result = await PersonaModel.update(persona.data);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la actualización de persona', error);
            res.status(500).json({ message: 'Error en la actualización de persona' });
        }
    }

    static async delete(req, res) {
        try {
            const idpersona = req.params.idpersona;
            const result = await PersonaModel.delete(idpersona);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en la eliminación de persona', error);
            res.status(500).json({ message: 'Error en la eliminación de persona' });
        }
    }
}