import { ConsultorioModel } from "../models/postgres/consultorio.js";
import { validateConsultorio, validateConsultorioUpdate } from "../schema/consultorio.js";

export class ConsultorioController {
  static async getAll(req, res) {
    try {
      const result = await ConsultorioModel.findAll();
      res.status(200).json(result);
    } catch (error) {
      console.error("Error en la consulta de consultorio", error);
      res.status(500).json({ message: "Error en la consulta de consultorio" });
    }
  }

  static async create(req, res) {
    try {
      const consultorio = validateConsultorio(req.body);
      if (consultorio.error) {
        return res.status(400).json(consultorio.error);
      }
      const result = await ConsultorioModel.create(consultorio);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error en la creación de consultorio", error);
      res.status(500).json({ message: "Error en la creación de consultorio" });
    }
  }

  static async update(req, res) {
    try {
      console.log(req.body);
      const consultorio = validateConsultorioUpdate(req.body);
      if (consultorio.error) {
        return res.status(400).json(consultorio.error);
      }
      const result = await ConsultorioModel.update(req.params.id, consultorio);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error en la actualización de consultorio", error);
      res
        .status(500)
        .json({ message: "Error en la actualización de consultorio" });
    }
  }

  static async delete(req, res) {
    try {
      const idconsultorio = req.params.idconsultorio;
      const result = await ConsultorioModel.delete(idconsultorio);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error en la eliminación de consultorio", error);
      res
        .status(500)
        .json({ message: "Error en la eliminación de consultorio" });
    }
  }

  static async getConsultorioPorId(req, res) {
    try {
      const idconsultorio = req.params.idconsultorio;
      const result = await ConsultorioModel.findById(idconsultorio);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error en la consulta de consultorio por id", error);
      res
        .status(500)
        .json({ message: "Error en la consulta de consultorio por id" });
    }
  }
}
