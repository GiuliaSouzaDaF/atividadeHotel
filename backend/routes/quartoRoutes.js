import { Router } from "express";

import auth from "../middlewares/authMiddleware.js";

import {
  criarQuarto,
  listarQuartos
} from "../controllers/quartoController.js";

const router = Router();

router.post("/", auth, criarQuarto);

router.get("/", auth, listarQuartos);

export default router;