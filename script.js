console.log("Portfolio website loaded!");

window.addEventListener("load", () => {
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");

  h1.innerText = "Hey Welcome to my portfolio ✨";
  p.innerText = "I'm Julisha";

  h1.style.opacity = 0;
  p.style.opacity = 0;

  setTimeout(() => {
    h1.style.transition = "1.5s ease";
    p.style.transition = "2s ease";

    h1.style.opacity = 1;
    p.style.opacity = 1;
  }, 200);
});