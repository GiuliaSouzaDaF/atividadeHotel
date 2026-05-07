import db from "../config/db.js";

export const criarQuarto = (req, res) => {

  const {
    numero,
    tipo_id,
    status
  } = req.body;

  const sql = `
    INSERT INTO quarto
    (
      numero,
      tipo_id,
      status
    )
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      numero,
      tipo_id,
      status
    ],
    (err) => {

      if (err) {

        return res.status(500).json({
          erro: err
        });

      }

      res.json({
        mensagem: "Quarto cadastrado"
      });

    }
  );

};

export const listarQuartos = (req, res) => {

  const sql = `
    SELECT
      quarto.id,
      quarto.numero,
      quarto.status,
      tipo_quarto.descricao AS tipo
    FROM quarto

    JOIN tipo_quarto
      ON tipo_quarto.id = quarto.tipo_id
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