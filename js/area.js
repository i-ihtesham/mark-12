const area = document.querySelectorAll(".area");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector("#output");



function calculateAreaOfTriangle() {
  let ans = ((Number(area[0].value)) * (Number(area[1].value))) /2
  if ( (Number(area[0].value)) <= 0 || (Number(area[1].value)) <=0) {
      output.innerText = "Invalid input";
  } else {
    output.innerText = "The Area is : " + ans.toFixed(2) + " cm2"
  }
}

submitButton.addEventListener("click", calculateAreaOfTriangle);