import {
  postData,
  getData
} from "./api.js";

const form =
  document.getElementById(
    "formHospede"
  );

const tabela =
  document.getElementById(
    "tabelaHospedes"
  );

async function carregarHospedes() {

  const hospedes =
    await getData("/hospedes");

  tabela.innerHTML = "";

  hospedes.forEach((h) => {

    tabela.innerHTML += `
      <tr>
        <td>${h.id}</td>
        <td>${h.nome}</td>
        <td>${h.email}</td>
      </tr>
    `;

  });

}

form.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const data =
      Object.fromEntries(
        new FormData(form)
      );

    await postData(
      "/hospedes",
      data
    );

    form.reset();

    carregarHospedes();

  }
);

carregarHospedes();