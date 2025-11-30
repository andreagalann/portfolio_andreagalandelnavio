const hTrack = document.querySelector(".h-track");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // velocidad del movimiento horizontal
  hTrack.style.transform = `translateX(${-scrollY * 0.6}px)`;
});
