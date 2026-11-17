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

const mainForm = document.querySelector<HTMLFormElement>(".formEmail");
if (mainForm) {
  mainForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = (mainForm.elements.namedItem("email") as HTMLInputElement | null)?.value.trim() ?? "";
    const password = (mainForm.elements.namedItem("password") as HTMLInputElement | null)?.value ?? "";

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

  errorEl.textContent = error;
  errorEl.style.display = "block";

  setTimeout(() => {
    errorEl.style.display = "none";
  }, 9000);
}

const isCorrectPassword = (password: string) => password.length >= 8;

const isCorrectData = (username: string, password: string) =>
  username === CORRECT_USERNAME && password === CORRECT_PASSWORD;

//#region Снегопад из лекции

const storageKey = "snow";
const snow = document.querySelector<HTMLElement>(".snow");
const snowflakes = document.querySelectorAll<HTMLElement>(".snow__flake");
const snowToggle = document.querySelector<HTMLFieldSetElement>(".snow-toggle");

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
  snow?.style.setProperty("--animation-name", animationName);
}

snowToggle?.addEventListener("change", (event) => {
  const value = (event.target as HTMLInputElement).value;
  changeSnowAnimation(value);
  localStorage.setItem(storageKey, value);
});

document.addEventListener("DOMContentLoaded", () => {
  const currentStorage = localStorage.getItem(storageKey);

  if (currentStorage) {
    const control = snowToggle?.querySelector<HTMLInputElement>(
      `.snow-toggle__control[value='${currentStorage}']`,
    );
    if (control) control.checked = true;
  }

  changeSnowAnimation(currentStorage);

  window.addEventListener("storage", () => {
    changeSnowAnimation(localStorage.getItem(storageKey));
  });
});

//#endregion