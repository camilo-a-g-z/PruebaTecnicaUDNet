import z from "zod";

/*
create table CITA (
   IDCITA               INT4                 not null,
   IDDOCTOR             INT4                 not null,
   IDPACIENTE           INT4                 not null,
   IDCONSULTORIO        INT4                 not null,
   DIA                  INT4                 not null,
   MES                  INT4                 not null,
   ANIO                 INT4                 not null,
   constraint PK_CITA primary key (IDCITA)
);
*/

const Cita = z.object({
  IDCITA: z.number(),
  IDDOCTOR: z.number(),
  IDPACIENTE: z.number(),
  IDCONSULTORIO: z.number(),
  DIA: z.number(),
  MES: z.number(),
  ANIO: z.number(),
});

export function validateCita(object) {
  return Cita.parse(object);
}

export default Cita;
