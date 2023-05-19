let numOne = "";
let operators = "";
let numTwo = "";

const buttons = document.querySelector(".button");
const result = document.querySelector("#result");

function calculate(num1, operator, num2) {
   num1 = parseFloat(num1);
   num2 = parseFloat(num2);

   if (operator === '+') {
      result.value = num1 + num2;
   } else if (operator === '-') {
      result.value = num1 - num2;
   } else if (operator === '*') {
      result.value = num1 + num2;
   } else if (operator === '/') {
      result.value = num1 / num2;
   }
   return result;
}

buttons.addEventListener("click", (event) => {
   const target = event.target;
   const action = target.classList[0];
   const btnContent = target.textContent;

   if (target.matches('button')) {
      if (action === 'number') {
         if (!numOne) {
            numOne += btnContent;
            result.value += numOne;
         } else {
            numTwo += btnContent;
            result.value += numTwo;
         }
         if (action === 'operator') {
            operators += btnContent;
            result.value += operators;
         }
         if (action === 'clear') {
            numOne = "";
            numTwo = "";
            operators = "";
            result = "";
         }
         if (action === 'calculate') {
            result += calculate(numOne, operators, numTwo);
         }
      }
   }
});