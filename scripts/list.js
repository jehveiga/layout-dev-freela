let list = [];

window.onload = function () {
  document.querySelector("#name").innerText = localStorage.getItem("userName");
  document.querySelector("#role").innerText = localStorage.getItem("role");

  getProjects();
};

function getProjects() {
  // Enviar para API
  fetch("https://660b4ff2ccda4cbc75dca830.mockapi.io/api/projects")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

        list = response;

        buildTable();
    })
}

function goToEdit(id){
    window.location.href = `project-create-edit.html?id=${id}`;
}

function deleteProject(id){
    // Enviar para API
  fetch(`https://660b4ff2ccda4cbc75dca830.mockapi.io/api/projects/${id}`, {method: "DELETE"})
  .then((response) => response.json())
  .then((response) => {
    list.filter(project => project.id !== id);

    buildTable();
  })
}

function buildTable(){
    document
    .querySelector("#table_body")
    .innerHTML = "";

    const idClient =localStorage.getItem("idClient");

    list = list.filter(project => project.id === idClient);

    list.forEach(element => {
        let template = `
        <div class="row">
        <div class="title-description">
          <h6 class="title">${element.title}</h6>
          <p class="description">
            ${element.description}
          </p>
        </div>
        <div class="price">R$ ${element.totalCost}</div>
        <div class="actions">
          <span class="edit material-symbols-outlined" onclick="goToEdit(${element.id})"> edit </span>
          <span class="delete material-symbols-outlined" onclick="deleteProject(${element.id})">delete</span>
        </div>
      </div>
      `;

      document
      .querySelector("#table_body")
      .insertAdjacentHTML("beforeend", template);
    })
}
