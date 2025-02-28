import { query } from "./conection.js";

export class ConsultorioModel {
    constructor(idconsultorio, nombre, direccion, telefono) {
        this.idconsultorio = idconsultorio;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    static async findAll() {
        try {
            const result = await query('SELECT * FROM public.consultorio ORDER BY idconsultorio ASC');
            return result;
        } catch (error) {
            console.error('Error en la consulta de consultorio', error);
        }
    }

    static async create(consultorio) {
        try {
            const result = await query('INSERT INTO public.consultorio (idconsultorio, nombre, direccion, telefono) VALUES ($1, $2, $3, $4)', [consultorio.idconsultorio, consultorio.nombre, consultorio.direccion, consultorio.telefono]);
            return result;
        } catch (error) {
            console.error('Error en la creación de consultorio', error);
        }
    }

    static async update(consultorio) {
        try {
            const result = await query('UPDATE public.consultorio SET nombre = $1, direccion = $2, telefono = $3 WHERE idconsultorio = $4 RETURNING *', [consultorio.nombre, consultorio.direccion, consultorio.telefono, consultorio.idconsultorio]);
            return result;
        } catch (error) {
            console.error('Error en la actualización de consultorio', error);
        }
    }

    static async delete(idconsultorio) {
        try {
            const result = await query('DELETE FROM public.consultorio WHERE idconsultorio = $1', [idconsultorio]);
            return result;
        } catch (error) {
            console.error('Error en la eliminación de consultorio', error
            );
        }
    }
}