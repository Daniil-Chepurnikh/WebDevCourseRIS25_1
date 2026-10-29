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

//#region Снегопад из лекции

function showUserError(name) {
  const errorEl = document.getElementById("error-block");

  // 1. Задаем текст ошибки
  errorEl.textContent = name;

  // 2. Делаем блок видимым
  errorEl.style.display = "block";
}

const isCorrectPassword = (password) => password.length >= 8;


const storageKey = 'snow'
const snow = document.querySelector('.snow')
const snowflakes = document.querySelectorAll('.snow__flake')
const snowToggle = document.querySelector('.snow-toggle')

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min
}

function getRndFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1)
}

snowflakes.forEach(snowflake => {
  snowflake.style.fontSize = getRndFloat(0.7, 1.5) + 'em'
  snowflake.style.animationDuration = getRndInteger(20, 30) + 's'
  snowflake.style.animationDelay = getRndInteger(-1, snowflakes.length / 2) + 's'
})

function changeSnowAnimation(animationName) {
  snow.style.setProperty('--animation-name',  animationName)
}

snowToggle.addEventListener('change', event => {
  changeSnowAnimation(event.target.value)
  localStorage.setItem(storageKey, event.target.value)
})

document.addEventListener('DOMContentLoaded', () => {
  let currentStorage = localStorage.getItem(storageKey)

  if (currentStorage) {
    snowToggle.querySelector(`.snow-toggle__control[value='${currentStorage}']`).checked = true
  }

  changeSnowAnimation(currentStorage)

  window.addEventListener('storage', () => {
    changeSnowAnimation(localStorage.getItem(storageKey))
  })
})

//#endregion
