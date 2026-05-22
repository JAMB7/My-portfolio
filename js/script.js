window.addEventListener("load", () => {

  const hero = document.querySelector(".hero");

  if (hero) {
    hero.style.opacity = 0;

    setTimeout(() => {
      hero.style.transition = "2s ease";
      hero.style.opacity = 1;
    }, 200);
  }

});