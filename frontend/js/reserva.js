import {
  postData,
  getData
} from "./api.js";

const form =
  document.getElementById(
    "formReserva"
  );

async function carregarReservas() {

  const reservas =
    await getData("/reservas");

  console.log(reservas);

}

form.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const data =
      Object.fromEntries(
        new FormData(form)
      );

    const response =
      await postData(
        "/reservas",
        data
      );

    if (response.erro) {

      alert(response.erro);

    } else {

      alert("Reserva criada");

      form.reset();

      carregarReservas();

    }

  }
);

carregarReservas();