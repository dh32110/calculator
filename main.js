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
         if (!operators || numOne === '-') {
            numOne += btnContent;
            result.value += btnContent;
         } else if (operators) {
            numTwo += btnContent;
            result.value += btnContent;
         }
      }

      if (action === 'operator' && btnContent === '-') {
         if (!numOne) {
            numOne += btnContent;
            result.value += btnContent;
         } else if (numOne && !operators) {
            operators += btnContent;
            result.value += btnContent;
         }
         if (operators && !numTwo) {
            numTwo += btnContent;
            result.value += btnContent;
         } else if (numTwo && !operators) {
            operators += btnContent;
            result.value += btnContent;
         }
      } else if (action === 'operator' && btnContent !== '-'){
         operators += btnContent;
         result.value += btnContent;
      }

      if (action === 'clear') {
         numOne = "";
         numTwo = "";
         operators = "";
         result.value = "";
      }
      if (action === 'calculate') {
         result.value += calculate(numOne, operators, numTwo);
         console.log(calculate(numOne, operators, numTwo));
         numOne = "";
         numTwo = "";
         operators = "";
      }
   }
}


buttons.addEventListener("click", onClickBtn);