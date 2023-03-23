//MAKING 2 RANDOM NUMBERS
const num1 = Math.ceil(Math.random() * 10);//MULTIPLY BY 10 BECOZ IT FORM NO B/W 0 AND 1 
const num2 = Math.ceil(Math.random() * 10);
//MAKING 2 RANDOM NUMBERS


//LINKING HTML WITH JS
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
//LINKING HTML WITH JS




//FORMING QUESTION
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
//FORMING QUESTION




//NOW CHEKING ANSWER OF THE USER
const correctAns = num1 * num2;
formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
//NOW CHEKING ANSWER OF THE USER





//CODE TO MAKE CHANGES ON SCORE OPTION AND USE OF LOCAL STORAGE OF THE WEBSITE .
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerText = `score: ${score}`;
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
//CODE TO MAKE CHANGES ON SCORE OPTION AND USE OF LOCAL STORAGE OF THE WEBSITE .






