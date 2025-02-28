import { query } from "./conection.js";

/**
 * create table CONSULTORIO (
   IDCONSULTORIO        INT4                 not null,
   NOMBRECONSULTORIO    VARCHAR(30)          not null,
   PISO                 INT4                 not null,
   constraint PK_CONSULTORIO primary key (IDCONSULTORIO)
);
 */

export class ConsultorioModel {
    constructor(idconsultorio, nombreconsultorio, piso) {
        this.idconsultorio = idconsultorio;
        this.nombreconsultorio = nombreconsultorio;
        this.piso = piso;
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
            const result = await query('INSERT INTO public.consultorio (idconsultorio, nombreconsultorio, piso) VALUES ($1, $2, $3)', [consultorio.idconsultorio, consultorio.nombreconsultorio, consultorio.piso]);
            return result;
        } catch (error) {
            console.error('Error en la creación de consultorio', error);
        }
    }
    static async update(id, consultorio) {
        try {
            const result = await query('UPDATE public.consultorio SET nombreconsultorio = $1, piso = $2 WHERE idconsultorio = $3', [consultorio.nombreconsultorio, consultorio.piso, id]);
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
            console.error('Error en la eliminación de consultorio', error);
        }
    }
    static async findById(idconsultorio) {
        try {
            const result = await query('SELECT * FROM public.consultorio WHERE idconsultorio = $1', [idconsultorio]);
            return result;
        } catch (error) {
            console.error('Error en la consulta de consultorio', error);
        }
    }
}