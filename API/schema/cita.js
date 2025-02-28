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
  idcita: z.number(),
  iddoctor: z.number(),
  idpaciente: z.number(),
  idconsultorio: z.number(),
  dia: z.number(),
  mes: z.number(),
  anio: z.number(),
});

export function validateCita(object) {
  return Cita.parse(object);
}

export default Cita;
