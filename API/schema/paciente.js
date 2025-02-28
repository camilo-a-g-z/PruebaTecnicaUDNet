import z from "zod";

const Paciente = z.object({
  idpaciente: z.number(),
  idpersona: z.number(),
  patologia: z.string().nullable()
});

export function validatePaciente(object) {
  return Paciente.parse(object);
}

export function validatePacienteUpdate(object) {
  return Paciente.partial().parse(object);
}

export default Paciente;
