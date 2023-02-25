const form = document.getElementById("form");
const username = document.getElementById("nome");
const email = document.getElementById("email");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  successInputs();
});

function successInputs() {
    
    if(username.value!='' && email.value!=''){
        success.style.display = 'block';
        erro.style.display = 'none';
    } else {
        success.style.display = 'none';
        erro.style.display = 'block';
    }
}

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;


  if (usernameValue === "") {
    setErrorFor(username, "*Campo Obrigatório*");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "*Campo Obrigatório*");
  } else {
    setSuccessFor(email);
  }


  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "form-control error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
  }