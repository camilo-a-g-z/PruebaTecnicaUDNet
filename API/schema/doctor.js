import z from "zod";

/*
create table DOCTOR (
   IDDOCTOR             INT4                 not null,
   IDPERSONA            INT4                 not null,
   ESPECIALIDAD         VARCHAR(30)          null,
   constraint PK_DOCTOR primary key (IDDOCTOR)
);
*/

const Doctor = z.object({
  iddoctor: z.number(),
  idpersona: z.number(),
  especialidad: z.string().nullable()
});

export function validateDoctor(object) {
  return Doctor.parse(object);
}

export default Doctor;
