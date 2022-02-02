



function fizzBuzz() {
    let text = ""
    let inputNode = document.getElementById("input").value
    for (let i = 1; i <= inputNode; i++) {
        if (i % 3 == 0 && i % 5 == 0) { text += "FizzBuzz </br>" }
        else if (i % 3 == 0) {
            text += "Fizz </br>"
        } else if (i % 5 == 0) { text += "Buzz </br>" } else {
            text += i + " </br>"
        }
    }
    document.getElementById("answerBoard").innerHTML = text;
}