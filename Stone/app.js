const stoneBtn = document.getElementById("stoneBtn");
const scissorBtn = document.getElementById("scissorBtn");
const paperBtn = document.getElementById("paperBtn");

const resultContainer = document.querySelector("h3");

const imageEl = document.querySelector("img");
const computerImgEl = document.getElementById("comp-img");

stoneBtn.onclick = function () {
  imageEl.setAttribute("src", "./images/rock.png");
  computerLoad();
  result();
};
paperBtn.onclick = function () {
  imageEl.setAttribute("src", "./images/paper.png");
  computerLoad();
  result();
};
scissorBtn.onclick = function () {
  imageEl.setAttribute("src", "./images/scissor.png");
  computerLoad();
  result();
};

function computerLoad() {
  const num = Math.floor(Math.random() * 3 + 1);

  if (num === 1) {
    computerImgEl.setAttribute("src", "./images/rock.png");
  } else if (num === 2) {
    computerImgEl.setAttribute("src", "./images/paper.png");
  } else {
    computerImgEl.setAttribute("src", "./images/scissor.png");
  }
}

function result() {
  const computerChoice = computerImgEl.getAttribute("src");
  const playerChoice = imageEl.getAttribute("src");
  const rock = "./images/rock.png";
  const paper = "./images/paper.png";
  const scissor = "./images/scissor.png";

  console.log(computerChoice, playerChoice);

  if (computerChoice === playerChoice) {
    resultContainer.textContent = "Its a Draw";
  } else {
    if (
      (playerChoice === rock && computerChoice === scissor) ||
      (playerChoice === scissor && computerChoice === paper) ||
      (playerChoice === paper && computerChoice === rock)
    ) {
      resultContainer.textContent = "Player Won";
    } else {
      resultContainer.textContent = "Computer Won";
    }
  }
}
