let numOne = "";
let operators = "";
let numTwo = "";
let onOperator = false;
let onDecimal = false;

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
            console.log(`num1 ${numOne}`);
            console.log(`result1 ${result.value}`);
         } else if (operators) {
            onDecimal = false;
            numTwo += btnContent;
            result.value += btnContent;
            console.log(`num2 ${numTwo}`);
            console.log(`result2 ${result.value}`);
         }
      }

      if (action === 'operator' && btnContent === '-') {
         if(!onOperator){
            onOperator = true;
         } else if(onOperator){
            return;
         }
         if (!numOne) {
            numOne += btnContent;
            result.value += btnContent;
            console.log(onDecimal);
         } else if (numOne && !operators) {
            operators += btnContent;
            result.value += btnContent;
         }
         if (operators && !numTwo) {
            onOperator = false;
            console.log(onDecimal);
            numTwo += btnContent;
            result.value += btnContent;
            console.log(onDecimal);
         } else if (numTwo && !operators) {
            operators += btnContent;
            result.value += btnContent;
         }
      } else if (action === 'operator' && btnContent !== '-') {
         operators += btnContent;
         result.value += btnContent;
      }

      if (action === 'decimal') {
         console.log(onDecimal);
         // 중복제거
         if (!onDecimal) {
            onDecimal = true;
         } else if (onDecimal){
            return;
         }
         // 입력
         if (!operators) {
            numOne += btnContent;
            result.value += btnContent;
            console.log(onDecimal);
         } else if(operators && onDecimal){
            numTwo += btnContent;
            result.value += btnContent;
            console.log(onDecimal);
         }
      }

      if (action === 'clear') {
         numOne = "";
         numTwo = "";
         operators = "";
         result.value = "";
         onDecimal = false;
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