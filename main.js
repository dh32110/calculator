let numOne = "";
let operators = "";
let numTwo = "";
let finish = "";

const buttons = document.querySelector(".buttons");
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
   return result.value;
}

function onClickBtn(event) {
   const target = event.target;
   const action = target.classList[0];
   const btnContent = target.textContent;

   if (target.matches('button')) {
      if (action === 'number') {
         if (!operators) {
            numOne += btnContent;
            result.value += btnContent;
            console.log(numOne);
         } else {
            numTwo += btnContent;
            result.value += btnContent;
            console.log(numTwo);
         }
      }
      if (action === 'operator') {
         operators += btnContent;
         result.value += btnContent;
         console.log(operators);
      }
      if (action === 'clear') {
         numOne = "";
         numTwo = "";
         operators = "";
         result.value = "";
      }
      if (action === 'calculate') {
         result.value += ` = ${calculate(numOne, operators, numTwo)}`;
      }
   }
}

buttons.addEventListener("click", onClickBtn);