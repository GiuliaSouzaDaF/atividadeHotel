import db from "../config/db.js";

export const criarReserva = (req, res) => {

  const {
    hospede_id,
    quarto_id,
    data_entrada,
    data_saida
  } = req.body;

  const sql = `
    INSERT INTO reserva
    (
      hospede_id,
      quarto_id,
      data_entrada,
      data_saida
    )
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      hospede_id,
      quarto_id,
      data_entrada,
      data_saida
    ],
    (err) => {

      if (err) {

        return res.status(400).json({
          erro: err.sqlMessage
        });

      }

      res.json({
        mensagem: "Reserva criada"
      });

    }
  );

};

export const listarReservas = (req, res) => {

  const sql = `
    SELECT
      reserva.id,
      hospede.nome AS hospede,
      quarto.numero AS quarto,
      reserva.data_entrada,
      reserva.data_saida,
      reserva.status

    FROM reserva

    JOIN hospede
      ON hospede.id = reserva.hospede_id

    JOIN quarto
      ON quarto.id = reserva.quarto_id
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