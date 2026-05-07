import db from "../config/db.js";

export const criarHospede = (req, res) => {

  const {
    nome,
    cpf,
    telefone,
    email
  } = req.body;

  const sql = `
    INSERT INTO hospede
    (
      nome,
      cpf,
      telefone,
      email
    )
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      nome,
      cpf,
      telefone,
      email
    ],
    (err) => {

      if (err) {

        return res.status(500).json({
          erro: err
        });

      }

      res.json({
        mensagem: "Hóspede cadastrado"
      });

    }
  );

};

export const listarHospedes = (req, res) => {

  const sql = `
    SELECT * FROM hospede
  `;

  db.query(sql, (err, results) => {

    if (err) {

      return res.status(500).json({
        erro: err
      });

    }

    res.json(results);

  });

};