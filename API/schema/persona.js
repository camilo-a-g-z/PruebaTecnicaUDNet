import z from "zod";

const Persona = z.object({
  idpersona: z.number(),
  nombrepersona: z.string(),
  apellidopersona: z.string(),
  numdocumento: z.number()
});

export function validatePersona(object) {
  return Persona.parse(object);
}

export function validatePersonaUpdate(object) {
  return Persona.partial().parse(object);
}

export default Persona;
