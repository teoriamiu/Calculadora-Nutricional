const leftPanel = document.getElementById("leftPanel");
const rightPanel = document.getElementById("rightPanel");

const openLeft = document.getElementById("openLeft");
const openRight = document.getElementById("openRight");

openLeft.addEventListener("click", () => {
  leftPanel.classList.toggle("open");
});

openRight.addEventListener("click", () => {
  rightPanel.classList.toggle("open");
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", (e) => {
    const side = e.target.dataset.close;
    if (side === "left") leftPanel.classList.remove("open");
    if (side === "right") rightPanel.classList.remove("open");
  });
});