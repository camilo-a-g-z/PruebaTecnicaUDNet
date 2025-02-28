import z from "zod";

const Doctor = z.object({
  iddoctor: z.number(),
  idpersona: z.number(),
  especialidad: z.string().nullable()
});

export function validateDoctor(object) {
  return Doctor.parse(object);
}

export function validateDoctorUpdate(object) {
  return Doctor.partial().parse(object);
}

export default Doctor;
