const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}

function setRandomColor() {
    // Generate a random hex color
    red = Math.random() * 255;
    green = Math.random() * 255;
    blue = Math.random() * 255;
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    // Set the body's background color to the random color  
    setColor(randomColor);
}


