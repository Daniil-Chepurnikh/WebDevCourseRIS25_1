function OnMaxButtonClick() {
  alert("Кнопка MAX нажата!");
}

function OnGosuslugiButtonClick() {
  alert("Кнопка Gosuslugi нажата!");
}


const mainForm = document.querySelector(".formEmail");

if (mainForm) {
  mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Кнопка нажата!");
    mainForm.reset();
  });
}

const buttonMax = document.getElementById("MaxEnter");

if (buttonMax) {
  buttonMax.addEventListener("click", OnMaxButtonClick);
}

const buttonGosuslugi = document.getElementById("GosuslugiEnter");

if (buttonGosuslugi) {
  buttonGosuslugi.addEventListener("click", OnGosuslugiButtonClick);
}
