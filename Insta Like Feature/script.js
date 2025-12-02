let container = document.querySelector("#img-container");

let loveTag = document.querySelector("i");

let loveIcon = document.querySelector("#like-icon");

let likeCount = document.querySelector("#lc-number");

let inactiveIcon = document.querySelector("#like-icon-inactive");
let activeIcon = document.querySelector("#like-icon-active");

let count = 100;

likeCount.textContent = count;

let isLiked = 0;

container.addEventListener("dblclick", () => {
  loveTag.style.opacity = "1";
  loveTag.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
  loveTag.style.rotate = "0deg";

  if (isLiked === 0) {
    inactiveIcon.style.display = "none";
    activeIcon.style.display = "block";

    count++;
    likeCount.textContent = count;
    isLiked = 1;
  }

  setTimeout(() => {
    loveTag.style.opacity = "0";
  }, 800);

  setTimeout(() => {
    loveTag.style.transform = "translate(-50%, -50%) scale(0) rotate(-40deg)";
  }, 1000);
});
