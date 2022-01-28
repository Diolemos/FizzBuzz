


let i = 1;
let playersNum;
playersNum = document.getElementById("input").value;
let answerBoardNode = document.getElementById("answerBoard");
let answer = []

function fizzBuzz() {
    while (i <= playersNum) {
        if (playersNum % 3 == 0 && playersNum % 5 === 0) {
            answerBoardNode.innerHTML = "FizzBuzz"
        }

        i++
    }


}