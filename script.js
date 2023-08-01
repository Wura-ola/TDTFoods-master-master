const form = document.querySelector(".forms");
const forms = document.querySelector(".formm");
const email = document.querySelector("#email");
const mailError = document.querySelector("#_email");
const passError = document.querySelector("#_password");
const password = document.querySelector("#password");
const emails = document.querySelector("#emails");
const emailsErro = document.querySelector("#emails");

console.log(form);
console.log(forms);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  showErro();
  showsErro();
});
email.addEventListener("input", () => {
  console.log("Helo");
  showErro();
});
function showErro() {
  if (email.value === "") {
    mailError.textContent = "Please enter a value";
    setTimeout(() => {
      mailError.textContent = "";
    }, 2000);
  } else if (email.validity.typeMismatch) {
    mailError.textContent = "Please enter a valid email address";
  } else {
    mailError.textContent = "";
  }
}

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  showError();
});

emails.addEventListener("input", () => {
  console.log("Helo");
  showError();
});
function showError() {
  if (emails.value === "") {
    emailsErro.textContent = "Please enter a value";
  } else if (emails.validity.typeMismatch) {
    emailsErro.textContent = "Please enter a valid email address";
  } else {
    emailsErro.textContent = "";
  }
}

password.addEventListener("input", () => {
  console.log("Helo");
  showsErro();
});

function showsErro() {
  if (password.value === "") {
    passError.textContent = "please enter a password";
    setTimeout(() => {
      mailError.textContent = "";
    }, 2000);
  } else if (password.value > 5) {
    passError.textContent = "Password should not be less  then 5";
  } else {
    passError.textContent = "";
  }
}
