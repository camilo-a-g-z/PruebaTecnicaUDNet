import z from "zod";

/*
create table CONSULTORIO (
   IDCONSULTORIO        INT4                 not null,
   NOMBRECONSULTORIO    VARCHAR(30)          not null,
   PISO                 INT4                 not null,
   constraint PK_CONSULTORIO primary key (IDCONSULTORIO)
);
*/

const Consultorio = z.object({
  IDCONSULTORIO: z.number(),
  NOMBRECONSULTORIO: z.string(),
  PISO: z.number(),
});

export function validateConsultorio(object) {
  return Consultorio.parse(object);
}

export default Consultorio;
