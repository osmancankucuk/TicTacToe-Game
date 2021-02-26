const h2 = document.querySelector(".starting");
const boxes = document.querySelectorAll(".box");
const playerText = document.querySelector("#player");
const boxId = document.querySelector("#boxes");
const errorText = document.querySelector("#error");
const topleft = document.querySelector("#top-left");
const topmid = document.querySelector("#top-mid");
const topright = document.querySelector("#top-right");
const midleft = document.querySelector("#mid-left");
const midmid = document.querySelector("#mid-mid");
const midright = document.querySelector("#mid-right");
const bottomleft = document.querySelector("#bottom-left");
const bottommid = document.querySelector("#bottom-mid");
const bottomright = document.querySelector("#bottom-right");
const result = document.querySelector("#result");

let player = "X";
let gameOver = false;
let winner;
function game(x) {
  let count;

  var div = document.getElementById(x);

  if (div.textContent === "") {
    div.textContent = "X";
    checkWin();
    checkTie();
    if (gameOver) {
      playerText.textContent = `Game is Over. ${winner} is Won`;
      setTimeout(function () {
        window.location.reload(1);
      }, 1750);
      if ((winner = "O")) {
        box.textContent = "";
        div.textContent = "";
      }
      if ((winner = "X")) {
        box.textContent = "";
        div.textContent = "";
      }
    }
    var box = document.getElementById("boxes").querySelectorAll(".box");
    Loop1: while (true) {
      count = 0;
      const comp = Math.floor(Math.random() * box.length);

      if (box[comp].textContent === "") {
        box[comp].textContent = "O";

        break;
      }
      for (let i = 0; i < box.length; i++) {
        if (box[i].textContent !== "") {
          count++;
          checkWin();

          if (count === 9) {
            count++;
            console.log(count);

            break Loop1;
          }
        }
      }
    }
  }

  function checkWin() {
    let row1 =
      boxes[0].textContent == boxes[1].textContent &&
      boxes[0].textContent == boxes[2].textContent &&
      boxes[0].textContent !== "";
    let row2 =
      boxes[3].textContent == boxes[4].textContent &&
      boxes[3].textContent == boxes[5].textContent &&
      boxes[3].textContent !== "";
    let row3 =
      boxes[6].textContent == boxes[7].textContent &&
      boxes[6].textContent == boxes[8].textContent &&
      boxes[6].textContent !== "";
    let columns1 =
      boxes[0].textContent == boxes[3].textContent &&
      boxes[0].textContent == boxes[6].textContent &&
      boxes[0].textContent !== "";
    let columns2 =
      boxes[1].textContent == boxes[4].textContent &&
      boxes[1].textContent == boxes[7].textContent &&
      boxes[1].textContent !== "";
    let columns3 =
      boxes[2].textContent == boxes[5].textContent &&
      boxes[2].textContent == boxes[8].textContent &&
      boxes[2].textContent !== "";
    let diagonal1 =
      boxes[0].textContent == boxes[4].textContent &&
      boxes[0].textContent == boxes[8].textContent &&
      boxes[0].textContent !== "";
    let diagonal2 =
      boxes[2].textContent == boxes[4].textContent &&
      boxes[2].textContent == boxes[6].textContent &&
      boxes[2].textContent !== "";

    if (
      row1 ||
      row2 ||
      row3 ||
      columns1 ||
      columns2 ||
      columns3 ||
      diagonal1 ||
      diagonal2
    ) {
      gameOver = true;
    }

    if (row1) return (winner = boxes[0].textContent);
    if (row2) return (winner = boxes[3].textContent);
    if (row3) return (winner = boxes[6].textContent);
    if (columns1) return (winner = boxes[0].textContent);
    if (columns2) return (winner = boxes[1].textContent);
    if (columns3) return (winner = boxes[2].textContent);
    if (diagonal1) return (winner = boxes[0].textContent);
    if (diagonal2) return (winner = boxes[2].textContent);
  }
}

// function checkDiagonals() {}
function checkTie() {}

//   let res = result();
//   if (res !== "" && res.includes("You")) {
//     let divResult = document.getElementById("result");
//     divResult.innerHTML = res;
//     setTimeout(function () {
//       window.location.reload(1);
//     }, 3000);
//   } else if (res.includes("X") && count === 9) {
//     let draww = document.getElementById("result");
//     draww.innerHTML = "Draw!";
//     setTimeout(function () {
//       window.location.reload(1);
//     }, 3000);
//   }
// }

// const random = Math.floor(Math.random() * boxes.length);
// let compChoose = boxes[random];

// starting.addEventListener("click", starter);
// function starter() {
//   starting.remove();
//   playerText.textContent = `${player} Turn!`;
//   boxes.forEach((block) =>
//     block.addEventListener("click", () => chooseArea(block))
//   );
// }

// function chooseArea(block) {
//   if (block.textContent === "") {
//     block.textContent = "X";
//     playerText.textContent = "Computers Turn";

//     setTimeout(() => {
//       block.textContent === "X";
//       if (boxes === "") {
//         compChoose.textContent = "O";
//       }
//     }, 1000);

//     turning();
//   } else {
//     errorText.textContent = "It's Fully";
//     block.style.border = "5px solid red";
//     setTimeout(() => {
//       errorText.textContent = "";
//       block.style.border = "2px solid white";
//     }, 3000);
//   }

//   checkWin();
// }

// function turning() {
//   if (playerText.textContent === "Computers Turn") {
//     setTimeout(() => {
//       playerText.textContent = "Players Turn";
//     }, 1500);
//   }
// }
// let i = 0;

//   return;
// } else if (player === compChoose) {
//   player = "X";
//   playerText.textContent = `${player} Turn`;
// }
