document.querySelectorAll(".hover-zoom").forEach((img) => {
  img.onmouseover = () => (img.style.transform = "scale(1.3)");
  img.onmouseout = () => (img.style.transform = "scale(1)");
});
