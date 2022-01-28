


let i = 1;
let playersNum;

let answerBoardNode = document.getElementById("answerBoard");
let answer = []

function fizzBuzz() {
    playersNum = document.getElementById("input").value;
    while (i <= playersNum) {
        if (playersNum % 3 == 0 && playersNum % 5 === 0) {
            console.log("FizzBuzz")
        } else if (playersNum % 3 == 0) {
            console.log(Fizz)
        } else if (playersNum % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }

        i++
    }
    fizzBuzz()

}