const side = document.querySelectorAll(".side");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

function sumOfSquares(a, b) {
  if (a > 0 && b > 0) {
    let s = a * a + b * b;
    return s;
  } else {
    return null;
  }
}

function calculateHypotenuse() {
  let ans = sumOfSquares(
    Number(side[0].value),
    Number(side[1].value)
  );
  if (ans !== null) {
    let res = Math.sqrt(ans);

    output.innerText =
      "Hypotenuse is : " + res.toFixed(2) + " cm";
  } else {
    output.innerText = "Input is invalid";
  }
}

submitButton.addEventListener("click", calculateHypotenuse);