import { login } from "./api.js";

const form =
  document.getElementById(
    "formLogin"
  );

form.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const data =
      Object.fromEntries(
        new FormData(form)
      );

    const response =
      await login(data);

    if (response.token) {

      localStorage.setItem(
        "token",
        response.token
      );

      window.location.href =
        "pages/dashboard.html";

    } else {

      document.getElementById(
        "mensagemErro"
      ).innerText =
        response.erro;

    }

  }
);