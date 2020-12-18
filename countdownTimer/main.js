const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const quot = document.getElementById("post");

const newYears = "1 jan 2021";

function countDown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const sec = Math.floor(seconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minEl.innerHTML = minutes;
  secEl.innerHTML = sec;
  //console.log(days, hours, minutes, sec);
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const qoutes = data[days].text;
      quot.innerHTML = qoutes;
      console.log(qoutes);
    });
}

countDown();

setInterval(countDown, 1000);
