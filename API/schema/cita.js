import z from "zod";

const Cita = z.object({
  idcita: z.number(),
  iddoctor: z.number(),
  idpaciente: z.number(),
  idconsultorio: z.number(),
  dia: z.number(),
  mes: z.number(),
  anio: z.number(),
  hora: z.string(),
});

export function validateCita(object) {
  return Cita.parse(object);
}

export function validateCitaUpdate(object) {
  return Cita.partial().parse(object);
}

export default Cita;
