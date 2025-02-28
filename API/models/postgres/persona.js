import { query } from "./conection.js";

export class PersonaModel {
    constructor(idpersona, nombrepersona, apellidopersona, numdocumento) {
        this.idpersona = idpersona;
        this.nombrepersona = nombrepersona;
        this.apellidopersona = apellidopersona;
        this.numdocumento = numdocumento
    }

    static async findAll() {
        try {
            const result = await query('SELECT * FROM public.persona ORDER BY idpersona ASC');
            return result;
        } catch (error) {
            console.error('Error en la consulta de persona', error);
        }
    }
    static async create(persona) {
        try {
            const result = await query('INSERT INTO public.persona (idpersona, nombrepersona, apellidopersona, numdocumento) VALUES ($1, $2, $3, $4)', [persona.idpersona, persona.nombrepersona, persona.apellidopersona, persona.numdocumento]);
            return result;
        } catch (error) {
            console.error('Error en la creación de persona', error);
        }
    }
    static async update(id, persona) {
        try {
            const result = await query('UPDATE public.persona SET nombrepersona = $1, apellidopersona = $2, numdocumento = $3 WHERE idpersona = $4', [persona.nombrepersona, persona.apellidopersona, persona.numdocumento, id]);
            return result;
        } catch (error) {
            console.error('Error en la actualización de persona', error);
        }
    }
    static async delete(idpersona) {
        try {
            const result = await query('DELETE FROM public.persona WHERE idpersona = $1', [idpersona]);
            return result;
        } catch (error) {
            console.error('Error en la eliminación de persona', error);
        }
    }
    static async findById(idpersona) {
        try {
            const result = await query('SELECT * FROM public.persona WHERE idpersona = $1', [idpersona]);
            return result;
        } catch (error) {
            console.error('Error en la consulta de persona', error);
        }
    }
}