import z from "zod";

const Consultorio = z.object({
  idconsultorio: z.number(),
  nombreconsultorio: z.string(),
  piso: z.number()
});

export function validateConsultorio(object) {
  return Consultorio.parse(object);
}

export function validateConsultorioUpdate(object) {
  return Consultorio.partial().parse(object);
}

export default Consultorio;
