let quizForm = document.querySelector(".quiz-form");
let output = document.querySelector(".output");
let submitBtn = document.querySelector("#submit-btn");

let correctAnswer = ["90°","right angle","acute","equilateral","180"]
function processAnswer()
{
    let score = 0;
    let i = 0;
    let formData = new FormData(quizForm);
    for (let value of formData.values())
    {
        if(value === correctAnswer[i])
        {
            score++;
        }
        i++;
    }
    output.innerText = "Your final score is : " + score;
}
submitBtn.addEventListener("click", processAnswer)