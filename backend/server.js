import dotenv from "dotenv";

dotenv.config();

const express = (await import("express")).default;
const cors = (await import("cors")).default;

const authRoutes =
  (await import("./routes/authRoutes.js")).default;

const hospedeRoutes =
  (await import("./routes/hospedeRoutes.js")).default;

const quartoRoutes =
  (await import("./routes/quartoRoutes.js")).default;

const reservaRoutes =
  (await import("./routes/reservaRoutes.js")).default;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/login", authRoutes);

app.use("/hospedes", hospedeRoutes);

app.use("/quartos", quartoRoutes);

app.use("/reservas", reservaRoutes);

app.listen(process.env.PORT, () => {

  console.log("Servidor rodando");

});