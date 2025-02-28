import { Router } from "express"
import { PersonaController } from "../controllers/persona.js"

export const PersonaRouter = Router();

PersonaRouter.get('/', PersonaController.getAll);

PersonaRouter.post('/', PersonaController.create);

PersonaRouter.patch('/:id', PersonaController.update);

PersonaRouter.delete('/:idpersona', PersonaController.delete);