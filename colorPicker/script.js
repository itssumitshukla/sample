
let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
  //add initial colors to square
  squares[i].style.backgroundColor = colors[i]

  //add click listener to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
    let clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor)

		//compare color to pickedColor
		if(clickedColor === pickedColor) {
      messageDisplay.textContent = "CORRECT!!!";
      changeColors(clickedColor);
		} else {
      alert("WRONG!!!");
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again";
		}
	});
};

function changeColors(colors) {
  for(let i = 0; i< colors.length; i++){
    squares[i].style.backgroundColor = colors;
  }
};

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  let arr = [];
  for(let i = 0; i < num; i++){
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(params) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}