const starting = document.querySelector("#start");

const h2 = document.querySelector(".starting");
const boxes = document.querySelectorAll(".box");
const playerText = document.querySelector("#player");
const boxId = document.querySelector("#boxes");
const errorText = document.querySelector("#error");

let player = "X";

const random = Math.floor(Math.random() * boxes.length);
let compChoose = boxes[random];

for (i = 0; i < boxes.length; i++) {
  var pieces = 0;
}

starting.addEventListener("click", starter);
function starter() {
  starting.remove();
  playerText.textContent = `${player} Turn!`;
  boxes.forEach((block) =>
    block.addEventListener("click", () => chooseArea(block))
  );
}

function chooseArea(block) {
  if (block.textContent === "") {
    block.textContent = "X";
    playerText.textContent = "Computers Turn";

    setTimeout(() => {
      block.textContent === "X";
      if (boxes != "X" || boxes != "O") {
        compChoose.textContent = "O";
      }
    }, 1000);

    turning();
  } else {
    errorText.textContent = "It's Fully";
    block.style.border = "5px solid red";
    setTimeout(() => {
      errorText.textContent = "";
      block.style.border = "2px solid white";
    }, 3000);
  }

  checkWin();
}

function turning() {
  if (playerText.textContent === "Computers Turn") {
    setTimeout(() => {
      playerText.textContent = "Players Turn";
    }, 1500);
  }
}
let i = 0;

//   return;
// } else if (player === compChoose) {
//   player = "X";
//   playerText.textContent = `${player} Turn`;
// }
