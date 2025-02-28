import z from "zod";

/*
create table PERSONA (
   IDPERSONA            INT4                 not null,
   NOMBREPERSONA        VARCHAR(30)          not null,
   APELLIDOPERSONA      VARCHAR(30)          not null,
   NUMDOCUMENTO         INT4                 not null,
   constraint PK_PERSONA primary key (IDPERSONA)
);
*/

const Persona = z.object({
  IDPERSONA: z.number(),
  NOMBREPERSONA: z.string(),
  APELLIDOPERSONA: z.string(),
  NUMDOCUMENTO: z.number(),
});

export function validatePersona(object) {
  return Persona.parse(object);
}

export default Persona;
