const selectBtn = document.querySelectorAll(".button");
const resetBtn = document.querySelector("#resetBtn");
const winner = document.querySelector("#winner");

let playerX = true;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const showWinner = (win) => {
  winner.innerText = `Congratulations, Winner is ${win}`;
  disbleBtn();
};

const showDraw = () => {
  winner.textContent = "It's a Draw!";
};

const resetGame = () => {
  playerX = true;
//   count = 0;
  enableBtn();
  winner.innerText = "";
};

const disbleBtn = () => {
  for (let btn of selectBtn) {
    btn.disabled = true;
  }
};

const enableBtn = () => {
  for (let btn of selectBtn) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

const checkWinner = () => {
  let winnerFound = false;
  for (let pattern of winPattern) {
    let pos1 = selectBtn[pattern[0]].innerText;
    let pos2 = selectBtn[pattern[1]].innerText;
    let pos3 = selectBtn[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        winnerFound = true;
      }
    }
  }

  if (!winnerFound && count === 9) {
    showDraw();
  }
};

selectBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (playerX) {
      btn.innerText = "X";
      playerX = false;
    } else {
      btn.innerText = "O";
      playerX = true;
    }
    btn.disabled = true;
    count++;
    checkWinner();
  });
});

resetBtn.addEventListener("click", resetGame);
