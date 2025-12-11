let mainEl = document.querySelector("#main");

let currentMenu = null;
let html = "";

mainEl.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  if (currentMenu) {
    currentMenu.remove();
    currentMenu = null;
  }
  let newDiv = document.createElement("div");

  newDiv.style.height = "auto";
  newDiv.style.width = "12rem";
  newDiv.style.position = "absolute";
  newDiv.style.top = `${event.clientY}px`;
  newDiv.style.left = `${event.clientX}px`;
  newDiv.style.backgroundColor = "rgba(18, 18, 18, 0.953)";
  newDiv.style.padding = "0.5rem 0.5rem";
  newDiv.style.color = "white";

  let options = [
    "View",
    "Sort By",
    "Refresh",
    "New",
    "Display Settings",
    "Show more",
    "Personalize",
  ];

  options.forEach((text) => {
    let p = document.createElement("p");
    p.textContent = text;
    p.style.padding = "0.6rem 0.6rem";
    p.style.cursor = "pointer";

    newDiv.appendChild(p);
  });

  mainEl.appendChild(newDiv);
  currentMenu = newDiv;
});

document.addEventListener("click", (event) => {
  if (currentMenu && !currentMenu.contains(event.target)) {
    currentMenu.remove();
    currentMenu = null;
  }
});

// Open new div on click on Windows icon

const startMenuApps = [
  {
    id: 1,
    icon: "icon/settings.png",
    name: "Settings",
  },
  {
    id: 2,
    icon: "icons8-file-explorer-48.png",
    name: "File Explorer",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
    name: "Microsoft Store",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/512/3580/3580339.png",
    name: "Photos",
  },
  {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
    name: "Calculator",
  },
  {
    id: 6,
    icon: "https://cdn-icons-png.flaticon.com/512/561/561188.png",
    name: "Mail",
  },
  {
    id: 7,
    icon: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    name: "Edge",
  },
  {
    id: 8,
    icon: "https://cdn-icons-png.flaticon.com/512/151/151917.png",
    name: "Notepad",
  },
  {
    id: 9,
    icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    name: "VS Code",
  },
  {
    id: 10,
    icon: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    name: "Spotify",
  },
  {
    id: 11,
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111370.png",
    name: "Discord",
  },
  {
    id: 12,
    icon: "https://cdn-icons-png.flaticon.com/512/888/888846.png",
    name: "Chrome",
  },
  {
    id: 13,
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969183.png",
    name: "Steam",
  },
  {
    id: 14,
    icon: "https://cdn-icons-png.flaticon.com/512/2504/2504929.png",
    name: "Netflix",
  },
  {
    id: 15,
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    name: "YouTube",
  },
];

let winKey = document.querySelector(".windows-key");

let isOpen = false;
let startMenu = null;

winKey.addEventListener("click", () => {
  if (!isOpen) {
    startMenu = document.createElement("div");

    startMenu.style.height = "35rem";
    startMenu.style.width = "40rem";
    startMenu.style.padding = "1rem";
    startMenu.style.position = "absolute";
    startMenu.style.bottom = "4rem";
    startMenu.style.left = "50%";
    startMenu.style.transform = "translateX(-50%)";
    startMenu.style.backgroundColor = "rgba(18, 18, 18, 0.95)";
    startMenu.style.borderRadius = "0.7rem";
    startMenu.style.backdropFilter = "blur(12px)";
    startMenu.style.boxShadow = "0 10px 40px rgba(0,0,0,0.4)";

    let appsGrid = document.createElement("div");

    appsGrid.style.display = "grid";
    appsGrid.style.gridTemplateColumns = "repeat(5, 1fr)";
    appsGrid.style.gap = "1rem";

    startMenuApps.forEach((app) => {
      let appDiv = document.createElement("div");

      appDiv.style.display = "flex";
      appDiv.style.flexDirection = "column";
      appDiv.style.alignItems = "center";

      let img = document.createElement("img");
      img.src = app.icon;
      img.style.width = "40px";
      img.style.height = "40px";
      img.style.objectFit = "contain";

      let p = document.createElement("p");
      p.textContent = app.name;
      p.style.color = "white";
      p.style.fontSize = "0.8rem";
      p.style.marginTop = "0.4rem";

      appDiv.appendChild(img);
      appDiv.appendChild(p);
      appsGrid.appendChild(appDiv);
    });

    startMenu.appendChild(appsGrid);
    mainEl.appendChild(startMenu);
    isOpen = true;
  } else {
    startMenu.remove();
    startMenu = null;
    isOpen = false;
  }
});
