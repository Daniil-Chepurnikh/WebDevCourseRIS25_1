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

/** @type {HTMLFormElement | null} */
const mainForm = document.querySelector(".formEmail");
if (mainForm) {
  mainForm.addEventListener("submit", (e) => {
    e.preventDefault();

    /** @type {HTMLInputElement} */
    const emailInput = /** @type {HTMLInputElement} */ (
      mainForm.elements.namedItem("email")
    );
    /** @type {HTMLInputElement} */
    const passwordInput = /** @type {HTMLInputElement} */ (
      mainForm.elements.namedItem("password")
    );
    const email = emailInput.value.trim();
    const password = passwordInput.value;

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

/**
 * @param {string} error
 */
function showUserError(error) {
  const errorEl = document.getElementById("error-block");

  if (!errorEl) return;

  errorEl.textContent = error;
  errorEl.style.display = "block";

  setTimeout(() => {
    errorEl.style.display = "none";
  }, 9000);
}

/**
 * @param {string} password
 * @returns {boolean}
 */
const isCorrectPassword = (password) => password.length >= 8;

/**
 * @param {string} username
 * @param {string} password
 * @returns {boolean}
 */
const isCorrectData = (username, password) =>
  username === CORRECT_USERNAME && password === CORRECT_PASSWORD;

//#region Снегопад из лекции

const storageKey = "snow";
/** @type {HTMLElement | null} */
const snow = document.querySelector(".snow");
/** @type {NodeListOf<HTMLElement>} */
const snowflakes = document.querySelectorAll(".snow__flake");
/** @type {HTMLFieldSetElement | null} */
const snowToggle = document.querySelector(".snow-toggle");

/**
 * @param {number} min
 * @param {number} max
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number} min
 * @param {number} max
 */
function getRndFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

snowflakes.forEach((snowflake) => {
  snowflake.style.fontSize = getRndFloat(0.7, 1.5) + "em";
  snowflake.style.animationDuration = getRndInteger(20, 30) + "s";
  snowflake.style.animationDelay =
    getRndInteger(-1, snowflakes.length / 2) + "s";
});

/**
 * @param {string | null} animationName
 */
function changeSnowAnimation(animationName) {
  snow?.style.setProperty("--animation-name", animationName);
}

snowToggle?.addEventListener("change", (event) => {
  const value = /** @type {HTMLInputElement} */ (event.target).value;
  changeSnowAnimation(value);
  localStorage.setItem(storageKey, value);
});

document.addEventListener("DOMContentLoaded", () => {
  const currentStorage = localStorage.getItem(storageKey);

  if (currentStorage) {
    const control = /** @type {HTMLInputElement | null} */ (
      snowToggle?.querySelector(
        `.snow-toggle__control[value='${currentStorage}']`,
      )
    );
    if (control) control.checked = true;
  }

  changeSnowAnimation(currentStorage);

  window.addEventListener("storage", () => {
    changeSnowAnimation(localStorage.getItem(storageKey));
  });
});

//#endregion
