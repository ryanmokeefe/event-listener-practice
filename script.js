function changeBackgroundColorToBlue() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = 'blue';
}

function changeBackgroundColorToRed() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = 'red';
}

let buttonRed = document.getElementsByClassName("red")[0]
let buttonBlue = document.getElementsByClassName("blue")[0]

buttonRed.addEventListener('click', changeBackgroundColorToRed)
  buttonRed.addEventListener('mouseover', changeBackgroundColorToRed)


buttonBlue.addEventListener('click', changeBackgroundColorToBlue)

  buttonBlue.addEventListener('mouseover', changeBackgroundColorToBlue)


