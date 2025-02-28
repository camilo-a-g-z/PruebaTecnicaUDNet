import { query } from "./conection.js";

export class DoctorModel {
    constructor(iddoctor, nombre, apellido, especialidad) {
        this.iddoctor = iddoctor;
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
    }

    static async findAll() {
        try {
            const result = await query('SELECT * FROM public.doctor ORDER BY iddoctor ASC');
            return result;
        } catch (error) {
            console.error('Error en la consulta de doctor', error);
        }
    }

    static async create(doctor) {
        try {
            const result = await query('INSERT INTO public.doctor (iddoctor, nombre, apellido, especialidad) VALUES ($1, $2, $3, $4)', [doctor.iddoctor, doctor.nombre, doctor.apellido, doctor.especialidad]);
            return result;
        } catch (error) {
            console.error('Error en la creación de doctor', error);
        }
    }

    static async update(doctor) {
        try {
            const result = await query('UPDATE public.doctor SET nombre = $1, apellido = $2, especialidad = $3 WHERE iddoctor = $4 RETURNING *', [doctor.nombre, doctor.apellido, doctor.especialidad, doctor.iddoctor]);
            return result;
        } catch (error) {
            console.error('Error en la actualización de doctor', error);
        }
    }

    static async delete(iddoctor) {
        try {
            const result = await query('DELETE FROM public.doctor WHERE iddoctor = $1', [iddoctor]);
            return result;
        } catch (error) {
            console.error('Error en la eliminación de doctor', error);
        }
    }

}