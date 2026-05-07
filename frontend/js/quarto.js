import {
  postData,
  getData
} from "./api.js";

const form =
  document.getElementById(
    "formQuarto"
  );

async function carregarQuartos() {

  const quartos =
    await getData("/quartos");

  console.log(quartos);

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
      "/quartos",
      data
    );

    form.reset();

    carregarQuartos();

  }
);

carregarQuartos();