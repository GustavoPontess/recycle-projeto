// CREATE - Procedimento para criar um novo usuario
const cadastroForm = document.getElementById("cadastro-form");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const senha2 = document.getElementById("ConfirmaPassword");
const tipo = document.getElementById("personas");

onload = async () => {};

cadastroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (checkinputs()) {
    // RECUPERA OS DADOS DO PRODUTO
    const user = JSON.stringify({
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: email.value,
      senha: senha.value,
      tipo: tipo.value,
    });
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    })
      .then((res) => res.json())
      .then(() => location.reload());
    window.location.href = "login.html?success";
  } else {
    console.log("nao passou");
  }
});

let n = false;
let sn = false;
let se = false;
let se2 = false;
let ti = false;
var em = false;
let res = false;

function checkinputs() {
  const nomeValue = nome.value.trim();
  const sobrenomeValue = sobrenome.value.trim();
  const emailValue = email.value.trim();
  const senhaValue = senha.value.trim();
  const senha2Value = senha2.value.trim();
  const tipoValue = tipo.value;

  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        let emails = users[i].email;
        if (emails === emailValue || emailValue === "") {
          em = false;
          errorValidation(email, `Email ja foi cadastrado!`);
        } else {
          successValidation(email);
          em = true;
        }
      }
      console.log(emailValue);
    });

  if (nomeValue === "") {
    //mostrar erro
    //adicionar a classe de erro
    errorValidation(nome, `Preencha esse campo!!`);
    n = false;
  } else {
    successValidation(nome);
    n = true;
  }
  if (sobrenomeValue === "") {
    //mostrar erro
    //adicionar a classe de erro
    errorValidation(sobrenome, `Preencha esse campo!!`);
    sn = false;
  } else {
    successValidation(sobrenome);
    sn = true;
  }
  if (senhaValue === "") {
    //mostrar erro
    //adicionar a classe de erro
    errorValidation(senha, `Preencha esse campo!!`);
    se = false;
  } else {
    successValidation(senha);
    se = true;
  }
  if (senha2Value === "") {
    //mostrar erro
    //adicionar a classe de erro
    errorValidation(senha2, `Preencha esse campo!!`);
    se2 = false;
  } else if (senhaValue !== senha2Value && senhaValue !== "") {
    errorValidation(senha2, `As senhas sao diferentes`);
    se2 = false;
  } else {
    se2 = true;
    successValidation(senha2);
  }
  if (tipoValue === "0") {
    //mostrar erro
    //adicionar a classe de erro
    errorValidation1(tipo, `Preencha esse campo!!`);
    ti = false;
  } else {
    ti = true;
    successValidation1(tipo);
  }
  if (n && sn && se && se2 && ti && em) {
    res = true;
  } else {
    res = false;
  }
  console.log(
    "nome:",
    n,
    "sobrenome:",
    sn,
    "senha:",
    se,
    "senha2",
    se2,
    "tipo",
    ti,
    "email",
    em,
    res
  );
  return res;
}

function errorValidation(input, message) {
  input.className = "form-control form-control-user border-danger";
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  small.className = "pl-3 text-danger";
}

function successValidation(input) {
  input.className = "form-control form-control-user border-success";
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.className = "pl-3 d-none";
}

function errorValidation1(input, message) {
  input.className = "custom-select border-danger";
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  small.className = "pl-3 text-danger";
}

function successValidation1(input) {
  input.className = "custom-select border-success";
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.className = "pl-3 d-none";
}
