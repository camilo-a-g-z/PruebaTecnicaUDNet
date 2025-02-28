import z from "zod";

/*
create table PACIENTE (
   IDPACIENTE           INT4                 not null,
   IDPERSONA            INT4                 not null,
   PATOLOGIA            VARCHAR(30)          null,
   constraint PK_PACIENTE primary key (IDPACIENTE)
);
*/

const Paciente = z.object({
  IDPACIENTE: z.number(),
  IDPERSONA: z.number(),
  PATOLOGIA: z.string().nullable(),
});

export function validatePaciente(object) {
  return Paciente.parse(object);
}

export default Paciente;
