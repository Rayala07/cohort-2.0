let countEl = document.querySelector("#count");

let incBtn = document.querySelector("#inc-btn");
let decBtn = document.querySelector("#dec-btn");

let num = 0;

countEl.textContent = num;

incBtn.addEventListener("click", () => {
  num++;
  countEl.textContent = num;
});

decBtn.addEventListener("click", () => {
  if (num > 0) {
    num--;
    countEl.textContent = num;
  } else {
    countEl.textContent = 0;
  }
});
