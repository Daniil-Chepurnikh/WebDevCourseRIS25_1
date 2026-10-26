function OnMaxButtonClick() {
  alert("Кнопка MAX нажата!");
}

function OnGosuslugiButtonClick() {
  alert("Кнопка Gosuslugi нажата!");
}

function Post() {
  alert("Кнопка нажата!");
}

// Находим кнопку по id
const buttonEnter = document.getElementById("Enter");

if (buttonEnter) {
  buttonEnter.addEventListener("click", Post);
}

const buttonMax = document.getElementById("MaxEnter");

if (buttonMax) {
  buttonMax.addEventListener("click", OnMaxButtonClick);
}

const buttonGosuslugi = document.getElementById("GosuslugiEnter");

if (buttonGosuslugi) {
  buttonGosuslugi.addEventListener("click", OnGosuslugiButtonClick);
}
