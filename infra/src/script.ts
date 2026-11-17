const CORRECT_USERNAME = "admin@example.com";
const CORRECT_PASSWORD = "CristianoRonaldo7";

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

    if (!email || !password) return;

    if (!isCorrectPassword(password)) {
      showUserError(
        `Ошибка! Длина вашего пароля: ${password.length} символ(а/ов). Длина пароля должна быть хотя бы 8 символов!`,
      );
    } else if (!isCorrectData(email, password)) {
      showUserError("Ошибка! Введена неверная пара логин/пароль.");
    } else {
      alert("Данные верны! Доступ разрешен.");
    }

    mainForm.reset();
  });
}

function showUserError(error: string) {
  const errorEl = document.getElementById("error-block");

  if (!errorEl) return;

  // Задаем текст ошибки
  errorEl.textContent = error;

  // Делаем блок видимым
  errorEl.style.display = "block";

  setTimeout(() => {
    errorEl.style.display = "none"; // Скрываем блок
  }, 9000);
}

const isCorrectPassword = (password: string) => password.length >= 8;

const isCorrectData = (username: string, password: string) =>
  username === CORRECT_USERNAME && password === CORRECT_PASSWORD;

//#region Снегопад из лекции

const storageKey = "snow";
const snow = document.querySelector(".snow");
const snowflakes = document.querySelectorAll(".snow__flake");
const snowToggle = document.querySelector(".snow-toggle");

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndFloat(min: number, max: number) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

snowflakes.forEach((snowflake) => {
  snowflake.style.fontSize = getRndFloat(0.7, 1.5) + "em";
  snowflake.style.animationDuration = getRndInteger(20, 30) + "s";
  snowflake.style.animationDelay =
    getRndInteger(-1, snowflakes.length / 2) + "s";
});

function changeSnowAnimation(animationName: string | null) {
  snow.style.setProperty("--animation-name", animationName);
}

snowToggle.addEventListener("change", (event) => {
  changeSnowAnimation(event.target.value);
  localStorage.setItem(storageKey, event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const currentStorage = localStorage.getItem(storageKey);

  if (currentStorage) {
    snowToggle.querySelector(
      `.snow-toggle__control[value='${currentStorage}']`,
    ).checked = true;
  }

  changeSnowAnimation(currentStorage);

  window.addEventListener("storage", () => {
    changeSnowAnimation(localStorage.getItem(storageKey));
  });
});

//#endregion
