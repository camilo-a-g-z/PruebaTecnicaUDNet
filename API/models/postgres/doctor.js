import { query } from "./conection.js";

/**
 * create table DOCTOR (
   IDDOCTOR             INT4                 not null,
   IDPERSONA            INT4                 not null,
   ESPECIALIDAD         VARCHAR(30)          null,
   constraint PK_DOCTOR primary key (IDDOCTOR)
);
 */
export class DoctorModel {
    constructor(iddoctor, idpersona, especialidad) {
        this.iddoctor = iddoctor;
        this.idpersona = idpersona;
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
            const result = await query('INSERT INTO public.doctor (iddoctor, idpersona, especialidad) VALUES ($1, $2, $3)', [doctor.iddoctor, doctor.idpersona, doctor.especialidad]);
            return result;
        } catch (error) {
            console.error('Error en la creación de doctor', error);
        }
    }
    static async update(id, doctor) {
        try {
            const result = await query('UPDATE public.doctor SET idpersona = $1, especialidad = $2 WHERE iddoctor = $3', [doctor.idpersona, doctor.especialidad, id]);
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
    static async findById(iddoctor) {
        try {
            const result = await query('SELECT * FROM public.doctor WHERE iddoctor = $1', [iddoctor]);
            return result;
        } catch (error) {
            console.error('Error en la consulta de doctor', error);
        }
    }

}