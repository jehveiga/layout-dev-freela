function cadastrar(event) {
  event.preventDefault();

  if (checkIfAnyRoleIsChecked === false) {
    alert("Marque um dos perfis!");
    return;
  }

  let payload = {
    role: document.getElementsByName("cargo")[0].checked === true ? 'dev' : 'client',
    fullName: document.querySelector("#fullName").value,
    birthDate: document.querySelector("#birthDate").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  // Enviar para API
  fetch('https://660b4ff2ccda4cbc75dca830.mockapi.io/api/users', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    alert("Cadastrado com sucesso!");

    localStorage.setItem("userName", response.fullName);
    localStorage.setItem("role", response.role === 'dev' ? "Desenvolvedor" : "Cliente");

    window.location.href = "list.html";
  })
  .catch(error => {
    alert('Erro no servidor');
  });
}

function checkIfAnyRoleIsChecked() {
  let counter = 0;
  let roleList = document.getElementsByName("cargo");

  for (let radioButton of roleList) {
    if (radioButton.checked) counter++;
  }

  return counter !== roleList.length;
}
