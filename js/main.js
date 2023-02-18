// Background color change

function randomBgColor(id, type) {
  if (type == "random") {
    const bgColor = [
      "#fdba74",
      "#bef264",
      "#6ee7b7",
      "#c4b5fd",
      "#f9a8d4",
      "#fecdd3",
      "#bae6fd",
      "#5eead4",
    ];
    const colorHexa = bgColor[Math.floor(Math.random() * bgColor.length)];
    document.getElementById(id).style.backgroundColor = colorHexa;
    console.log(colorHexa, id);
  } else {
    document.getElementById(id).style.backgroundColor = type;
  }
}
