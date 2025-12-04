let text = document.querySelector("h1");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let textContent = text.textContent;

let iterator = 0;
let intervals;

text.addEventListener("mouseenter", () => {
  iterator = 0;
  clearInterval(intervals);
  intervals = setInterval(randomText, 20);
});

function randomText() {
  const newStr = textContent
    .split("")
    .map((char, idx) => {
      if (idx < iterator) {
        return char;
      }
      return characters.split("")[
        Math.floor(Math.random() * characters.length)
      ];
    })
    .join("");

  text.textContent = newStr;

  iterator += 0.3;

  if (iterator >= textContent.length) {
    clearInterval(intervals);
  }
}
