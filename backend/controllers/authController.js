import jwt from "jsonwebtoken";

export const login = async (req, res) => {

  const { email, senha } = req.body;

  if (
    email === "admin@hotel.com" &&
    senha === "123456"
  ) {

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }

  return res.status(401).json({
    erro: "Credenciais inválidas"
  });

};