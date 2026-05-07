const API = "http://localhost:3000";

export async function login(data) {

  const response = await fetch(
    `${API}/login`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify(data)
    }
  );

  return response.json();
}

export async function getData(url) {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${API}${url}`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

  return response.json();
}

export async function postData(
  url,
  data
) {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${API}${url}`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${token}`
      },

      body: JSON.stringify(data)
    }
  );

  return response.json();
}