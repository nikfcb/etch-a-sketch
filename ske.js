let container = document.getElementById("container");

let value = prompt(`Enter the grid value ?(only upto 16)`);

let rows = value;
let cols = value;

function makeRows() {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "griditem";
    cell.addEventListener("mouseover", function (e) {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      console.log(bgColor);
      e.target.style.backgroundColor = bgColor;
    });

    const input = document.querySelector("input");

    input.addEventListener("input", function (e) {
      let colorSelection = e.target.value;
      console.log(colorSelection);
      cell.style.backgroundColor = colorSelection;
    });
  }
}

if (value > 16) {
  alert("please enter the value upto 16");
} else {
  makeRows();
}
