import { query } from './conection.js';

export class CitaModel {
    constructor(idcita, iddoctor, idpaciente, idconsultorio, dia, mes, anio) {
        this.idcita = idcita;
        this.iddoctor = iddoctor;
        this.idpaciente = idpaciente;
        this.idconsultorio = idconsultorio;
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
    }

    static async findAll() {
        try {
            const result = await query('SELECT * FROM public.cita ORDER BY idcita ASC');
            return result;
        } catch (error) {
            console.error('Error en la consulta de cita', error);
        }
    }

    static async create(cita) {
        try {
            const result = await query('INSERT INTO public.cita (iddoctor, idpaciente, idconsultorio, dia, mes, anio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [cita.iddoctor, cita.idpaciente, cita.idconsultorio, cita.dia, cita.mes, cita.anio]);
            return result;
        } catch (error) {
            console.error('Error en la creación de cita', error);
        }
    }

    static async update(cita) {
        try {
            const result = await query('UPDATE public.cita SET iddoctor = $1, idpaciente = $2, idconsultorio = $3, dia = $4, mes = $5, anio = $6 WHERE idcita = $7 RETURNING *', [cita.iddoctor, cita.idpaciente, cita.idconsultorio, cita.dia, cita.mes, cita.anio, cita.idcita]);
            return result;
        } catch (error) {
            console.error('Error en la actualización de cita', error);
        }
    }

    static async delete(idcita) {
        try {
            const result = await query('DELETE FROM public.cita WHERE idcita = $1', [idcita]);
            return result;
        } catch (error) {
            console.error('Error en la eliminación de cita', error);
        }
    }

}