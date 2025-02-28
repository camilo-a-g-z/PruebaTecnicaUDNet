import { query } from "./conection.js";
/**
 * create table PACIENTE (
   IDPACIENTE           INT4                 not null,
   IDPERSONA            INT4                 not null,
   PATOLOGIA            VARCHAR(30)          null,
   constraint PK_PACIENTE primary key (IDPACIENTE)
);
 */
export class PacienteModel {
    constructor(idpaciente, idpersona, patologia) {
        this.idpaciente = idpaciente;
        this.idpersona = idpersona;
        this.patologia = patologia;
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
            const result = await query('INSERT INTO public.paciente (idpaciente, idpersona, patologia) VALUES ($1, $2, $3)', [paciente.idpaciente, paciente.idpersona, paciente.patologia]);
            return result;
        } catch (error) {
            console.error('Error en la creación de paciente', error);
        }
    }
    static async update(id, paciente) {
        try {
            const result = await query('UPDATE public.paciente SET idpersona = $1, patologia = $2 WHERE idpaciente = $3', [paciente.idpersona, paciente.patologia, id]);
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
    static async findById(idpaciente) {
        try {
            const result = await query('SELECT * FROM public.paciente WHERE idpaciente = $1', [idpaciente]);
            return result;
        } catch (error) {
            console.error('Error en la consulta de paciente', error);
        }
    }
}