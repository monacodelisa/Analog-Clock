const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

function runTheClock() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log(`Hour: ${hr} Minute: ${min} Second: ${sec}`);

  let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
  let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
  let secPosition = (sec * 360) / 60;

  hourHand.style.transform = `rotate(${hrPosition}deg)`;
  minuteHand.style.transform = `rotate(${minPosition}deg)`;
  secondHand.style.transform = `rotate(${secPosition}deg)`;
}

let interval = setInterval(runTheClock, 1000);

// Relaying on The Browser Version - with animation

// let date = new Date();
// let hr = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();
// console.log(`Hour: ${hr} Minute: ${min} Second: ${sec}`);

// let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
// let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
// let secPosition = (sec * 360) / 60;

// function runTheClock() {
//   hrPosition = hrPosition + 3 / 360;
//   minPosition = minPosition + 6 / 60;
//   secPosition = secPosition + 6;

//   hourHand.style.transform = `rotate(${hrPosition}deg)`;
//   minuteHand.style.transform = `rotate(${minPosition}deg)`;
//   secondHand.style.transform = `rotate(${secPosition}deg)`;
// }

// let interval = setInterval(runTheClock, 1000);
