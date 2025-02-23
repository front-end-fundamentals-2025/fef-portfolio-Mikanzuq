const buttons = document.querySelectorAll(".button");

document.querySelectorAll(".hover-zoom").forEach((img) => {
  // line 3 of code was adapted from https://chatgpt.com/share/67bb42cb-c75c-800a-a460-1880e17dffdc & https://www.w3schools.com/js/js_htmldom_eventlistener.asp
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.3)";
    img.style.transition = "transform 0.3s ease-in-out";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

buttons.forEach(function (button) {
  // line 14 of code was adapted from https://www.youtube.com/watch?v=VegecG4EXeI
  console.log("buttons work:", button);

  button.addEventListener("mouseover", function (event) {
    button.style.backgroundColor = "rgb(0, 0, 0)";
    button.style.color = "rgb(250, 250, 250)";
    button.style.transition = "0.3s";
    button.style.padding = "5px 10px";
    button.style.borderRadius = "30px";
  });

  button.addEventListener("mouseout", function (event) {
    button.style.backgroundColor = "rgb(190, 96, 96)";
    button.style.color = "rgb(250, 250, 250)";
    button.style.transition = "0.3s";
  });
});
