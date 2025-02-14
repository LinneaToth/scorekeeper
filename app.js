const scorePOneText = document.querySelector("#scorep1");
const scorePTwoText = document.querySelector("#scorep2");
const maxRoundsInput = document.querySelector("#rounds");
const oneUpOneButton = document.querySelector("#oneUpOneButton");
const oneUpTwoButton = document.querySelector("#oneUpTwoButton");
const resetButton = document.querySelector("#resetButton");

let scorePOne = 0;
let scorePTwo = 0;
let maxRounds = 3;

const updateScoreText = function (p1, p2) {
    scorePOneText.innerText = p1;
    scorePTwoText.innerText = p2;
}

const resetFunc = function () {
    scorePOne = 0;
    scorePTwo = 0;
    scorePOneText.style.fontWeight = "normal";
    scorePTwoText.style.fontWeight = "normal";
    oneUpTwoButton.classList.remove("disable");
    oneUpOneButton.classList.remove("disable");
}

maxRoundsInput.addEventListener("change", (e) => {
    maxRounds = maxRoundsInput.value;
    console.log("new input: " + maxRoundsInput.value)
    resetFunc();
    updateScoreText(scorePOne, scorePTwo);
})

oneUpOneButton.addEventListener("click", (e) => {
    if (scorePOne < maxRounds && scorePTwo < maxRounds) {
        scorePOne++;
        updateScoreText(scorePOne, scorePTwo);
        if (scorePOne == maxRounds) {
            scorePOneText.style.fontWeight = "bolder";
            oneUpTwoButton.classList.add("disable");
            oneUpOneButton.classList.add("disable");
        }
    }
})

oneUpTwoButton.addEventListener("click", (e) => {
    if (scorePOne < maxRounds && scorePTwo < maxRounds) {
        scorePTwo++;
        updateScoreText(scorePOne, scorePTwo);
        if (scorePTwo == maxRounds) {
            scorePTwoText.style.fontWeight = "bolder";
            oneUpTwoButton.classList.add("disable");
            oneUpOneButton.classList.add("disable");
        }
    }
})

resetButton.addEventListener("click", (e) => {
    maxRounds = 3;
    maxRoundsInput.value = 3;
    resetFunc();
    updateScoreText(scorePOne, scorePTwo);
})

