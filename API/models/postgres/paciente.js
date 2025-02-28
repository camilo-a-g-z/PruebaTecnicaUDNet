import { query } from "./conection.js";

export class PacienteModel {
    constructor(idpaciente, nombre, apellido, telefono) {
        this.idpaciente = idpaciente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }

    static async findAll() {
        try {
            const result = await query('SELECT * FROM public.paciente ORDER BY idpaciente ASC');
            return result;
        } catch (error) {
            console.error('Error en la consulta de paciente', error);
        }
    }

    static async create(paciente) {
        try {
            const result = await query('INSERT INTO public.paciente (idpaciente, nombre, apellido, telefono) VALUES ($1, $2, $3, $4)', [paciente.idpaciente, paciente.nombre, paciente.apellido, paciente.telefono]);
            return result;
        } catch (error) {
            console.error('Error en la creación de paciente', error);
        }
    }

    static async update(paciente) {
        try {
            const result = await query('UPDATE public.paciente SET nombre = $1, apellido = $2, telefono = $3 WHERE idpaciente = $4 RETURNING *', [paciente.nombre, paciente.apellido, paciente.telefono, paciente.idpaciente]);
            return result;
        } catch (error) {
            console.error('Error en la actualización de paciente', error);
        }
    }

    static async delete(idpaciente) {
        try {
            const result = await query('DELETE FROM public.paciente WHERE idpaciente = $1', [idpaciente]);
            return result;
        } catch (error) {
            console.error('Error en la eliminación de paciente', error);
        }
    }
}