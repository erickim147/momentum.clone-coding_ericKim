const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  const greeting_time = new Date();
  const greeting_hours = greeting_time.getHours();
  if (greeting_hours >= 6 && greeting_hours <= 12) {
    greeting.innerText = `Good Morning. ${text}`;
  } else if (greeting_hours >= 13 && greeting_hours <= 18) {
    greeting.innerText = `Good Afternoon. ${text}`;
  } else if (greeting_hours >= 19 && greeting_hours <= 21) {
    greeting.innerText = `Good Evening. ${text}`;
  } else if (greeting_hours >= 22 && greeting_hours <= 23) {
    greeting.innerText = `Good Night. ${text}`;
  } else if (greeting_hours >= 0 && greeting_hours <= 5) {
    greeting.innerText = `Good Dreams. ${text}`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
