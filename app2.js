const pOne = {
    scoreText: document.querySelector("#scorep1"),
    score: 0,
    oneUpButton: document.querySelector("#oneUpOneButton"),
}

const pTwo = {
    scoreText: document.querySelector("#scorep2"),
    score: 0,
    oneUpButton: document.querySelector("#oneUpTwoButton"),
}

const allPlayers = [pOne, pTwo];
const maxRoundsInput = document.querySelector("#rounds");
const resetButton = document.querySelector("#resetButton");
let maxRounds = 3;
let gameOn = true;

const updateScoreText = function (p1, p2) {
    pOne.scoreText.innerText = p1;
    pTwo.scoreText.innerText = p2;
}

const game = function (oneUpped) {
    oneUpped.score++;
    updateScoreText(pOne.score, pTwo.score);
    if (oneUpped.score == maxRounds) {
        gameOn = false;
        oneUpped.scoreText.style.fontWeight = "bolder";
        pOne.oneUpButton.classList.add("disable");
        pTwo.oneUpButton.classList.add("disable");
    }
}

const resetFunc = function () {
    for (let player of allPlayers) {
        player.score = 0;
        player.scoreText.style.fontWeight = "normal";
        player.oneUpButton.classList.remove("disable");
    }
    gameOn = true;
}

maxRoundsInput.addEventListener("change", (e) => {
    maxRounds = maxRoundsInput.value;
    resetFunc();
    updateScoreText(pOne.score, pTwo.score);
})

for (let player of allPlayers) {
    player.oneUpButton.addEventListener("click", (e) => {
        if (gameOn) {
            game(player);
        }
    });
}

resetButton.addEventListener("click", (e) => {
    maxRounds = 3;
    maxRoundsInput.value = 3;
    resetFunc();
    updateScoreText(pOne.score, pTwo.score);
})

