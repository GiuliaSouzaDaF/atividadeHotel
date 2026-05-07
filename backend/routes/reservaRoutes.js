import { Router } from "express";

import auth from "../middlewares/authMiddleware.js";

import {
  criarReserva,
  listarReservas
} from "../controllers/reservaController.js";

const router = Router();

router.post("/", auth, criarReserva);

router.get("/", auth, listarReservas);

export default router;