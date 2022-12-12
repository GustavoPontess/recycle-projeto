const cadastro = location.href.split("?")[1];

const cadsucess = document.getElementById("alert-sucsses");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const lembre = document.getElementById("customCheck");

onload = () => {
  if (cadastro === "success") {
    cadsucess.className = "alert alert-success alert-dismissible fade show";
  } else {
    cadsucess.className =
      "alert alert-success alert-dismissible fade show d-none";
  }
};

cadastroForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = await fetch("http://localhost:3000/users").then((res) => res.json());

  for (let i = 0; i < data.length; i++) {
    let user = data[i];
    if (user.email === email.value) {

        
    }

    if (user.email === email.value) {

    }
  }
});
