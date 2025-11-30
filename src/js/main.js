const track = document.querySelector(".h-track");

window.addEventListener("scroll", () => {
  const sectionTop = track.parentElement.offsetTop;
  const scrollPos = window.scrollY - sectionTop;

  if (scrollPos >= 0) {
    track.style.transform = `translateX(${-scrollPos}px)`;
  }
});
