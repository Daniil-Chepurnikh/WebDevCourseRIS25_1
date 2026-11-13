function OnMaxButtonClick() {
  alert("Кнопка MAX нажата!");
}

function OnGosuslugiButtonClick() {
  alert("Кнопка Gosuslugi нажата!");
}

const buttonMax = document.getElementById("MaxEnter");
const buttonGosuslugi = document.getElementById("GosuslugiEnter");

if (buttonMax) {
  buttonMax.addEventListener("click", OnMaxButtonClick);
}

if (buttonGosuslugi) {
  buttonGosuslugi.addEventListener("click", OnGosuslugiButtonClick);
}

const mainForm = document.querySelector(".formEmail");
if (mainForm) {
  mainForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = mainForm.elements.email.value.trim();
    const password = mainForm.elements.password.value;
    const remember = mainForm.elements.remember.checked;

    if (!isCorrectPassword(password)) {
      showUserError(`Ошибка! Длина вашего пароля: ${password.length}. Длина пароля должна быть хотя бы 8 символов!`);
    } else {
      alert("Кнопка нажата!");
    }

    mainForm.reset();
  });
}

function showUserError(name : string) {
  const errorEl = document.getElementById("error-block");

  // 1. Задаем текст ошибки
  errorEl.textContent = name;

  // 2. Делаем блок видимым
  errorEl.style.display = "block";
}

const isCorrectPassword = (password : string) => password.length >= 8;