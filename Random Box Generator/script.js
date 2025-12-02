let container = document.querySelector("#main");
let btnEl = document.querySelector("#btn");

const names = [
  "Eleven",
  "Mike Wheeler",
  "Dustin Henderson",
  "Lucas Sinclair",
  "Will Byers",
  "Max Mayfield",
  "Jim Hopper",
  "Joyce Byers",
  "Nancy Wheeler",
  "Steve Harrington",
];

btnEl.addEventListener("click", () => {
  let newHeading = document.createElement("h3");

  let randomNames = Math.floor(Math.random() * names.length);

  let x = Math.floor(Math.random() * 90);
  let y = Math.floor(Math.random() * 80);

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let r = Math.floor(Math.random() * 360);

  newHeading.style.position = "absolute";
  newHeading.style.top = y + "%";
  newHeading.style.left = x + "%";
  //   newHeading.style.transform = `rotate(${r}deg)`;
  newHeading.style.color = `rgb(${c1},${c2},${c3})`;

  newHeading.innerHTML = names[randomNames];

  container.appendChild(newHeading);
});
