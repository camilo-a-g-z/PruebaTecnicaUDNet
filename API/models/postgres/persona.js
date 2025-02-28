import { query } from "./conection.js";

export class PersonaModel {
    constructor(idpersona, nombre, apellido, telefono) {
        this.idpersona = idpersona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
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
            const result = await query('INSERT INTO public.persona (idpersona, nombre, apellido, telefono) VALUES ($1, $2, $3, $4)', [persona.idpersona, persona.nombre, persona.apellido, persona.telefono]);
            return result;
        } catch (error) {
            console.error('Error en la creación de persona', error);
        }
    }

    static async update(persona) {
        try {
            const result = await query('UPDATE public.persona SET nombre = $1, apellido = $2, telefono = $3 WHERE idpersona = $4 RETURNING *', [persona.nombre, persona.apellido, persona.telefono, persona.idpersona]);
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
}