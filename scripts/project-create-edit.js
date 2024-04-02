// Type: 'create' | 'edit'
let screenType = "create";

// Obtém os parametros da url
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

window.onload = function () {
  SetScreenTypeText();
};

function SetScreenTypeText() {
  screenType = params.id ? "edit" : "create";

  if (screenType == "create") {
    document.querySelector("#main_title").innerText =
      "Vamos cadastrar seu novo projeto!";
    document.querySelector("#df_button").innerText = "Cadastrar";
  } else {
    document.querySelector("#main_title").innerText = "Editar projeto";
    document.querySelector("#df_button").innerText = "Salvar";
  }
}

function createOrEdit(event) {
  event.preventDefault();

  let payload = {
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
    totalCost: document.querySelector("#totalCost").value,
    idClient: "1",
  };

  // Enviar para API
  fetch(
    `https://660b4ff2ccda4cbc75dca830.mockapi.io/api/projects${
      screenType === "edit" ?  `/${params.id}`: ""
    }`,
    {
      method: screenType === 'edit' ? "PUT" : "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      if (screenType === "edit") alert("Editado com sucesso");
      else alert("Cadastrado com sucesso");
    })
    .catch((error) => {
      alert("Erro no servidor");
    });
}
