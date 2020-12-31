const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  clockDay = clockContainer.querySelector("h6");

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const getdate = date.getDate();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  clockDay.innerText = `${year}. ${month < 10 ? `0${month}` : month}. ${
    getdate < 10 ? `0${getdate}` : getdate
  } `;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
