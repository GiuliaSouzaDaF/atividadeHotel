import { Router } from "express";

import auth from "../middlewares/authMiddleware.js";

import {
  criarHospede,
  listarHospedes
} from "../controllers/hospedeController.js";

const router = Router();

router.post("/", auth, criarHospede);

router.get("/", auth, listarHospedes);

export default router;