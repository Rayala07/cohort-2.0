let mainEl = document.querySelector("#main");

mainEl.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  let newDiv = document.createElement("div");

  newDiv.style.height = "15rem";
  newDiv.style.width = "10rem";
  newDiv.style.position = "absolute";
  newDiv.style.top = `${event.clientY}px`;
  newDiv.style.left = `${event.clientX}px`;
  newDiv.style.backgroundColor = "rgba(18, 18, 18, 0.953)";

  mainEl.appendChild(newDiv);
});
