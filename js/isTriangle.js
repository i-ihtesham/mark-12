let input = document.querySelectorAll(".angle")
let submitBtn = document.querySelector("#submit")
let output = document.querySelector("#output")

function calculateAngle(a,b,c)
{
    return (a+b+c);
}
function isTriangle()
{
    let sum = calculateAngle(Number(input[0].value), Number(input[1].value), Number(input[2].value))
    console.log(input[0].value)
    if(sum == 180)
    {
        output.innerText = `Yay the triangle can be formed by ${input[0].value}°, ${input[1].value}° and ${input[2].value}°`
    }
    else
    {
        output.innerText = `The triangle cannot be formed`
    }
}

submitBtn.addEventListener("click", isTriangle)