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
      result.value = num1 * num2;
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
      ////////////////////////////////////////////////////////////////
      if (action === 'number') {
         if (!operators) {
            numOne += btnContent;
            result.value += btnContent;
            onOperator = false;
            console.log(`one ${numOne}`);
         } else if (operators) {
            onDecimal = false;
            numTwo += btnContent;
            result.value += btnContent;
            console.log(`Two ${numTwo}`);
         }
      }

      if (action === 'operator' && btnContent === '-') {
         if (!numOne) {
            numOne += btnContent;
            result.value += btnContent;
         } else if (numOne && !operators) {
            onOperator = false;
            onDecimal = false;
            operators += btnContent;
            result.value += btnContent;
            console.log(`-operators ${operators}`);
         } else if (operators && !numTwo) {
            numTwo += btnContent;
            result.value += btnContent;
            console.log(`-Two ${numTwo}`);
         }
      } else if (action === 'operator') {
         if (!onOperator) {
            onOperator = true;
         } else if (onOperator) {
            return;
         }
         operators += btnContent;
         result.value += btnContent;
         console.log(`operators ${operators}`);
      }

      if (action === 'decimal') {
         console.log(onDecimal);
         // 중복제거
         if (!onDecimal) {
            onDecimal = true;
         } else if (onDecimal) {
            return;
         }
         // 입력
         if (!operators) {
            onOperator = false;
            numOne += btnContent;
            result.value += btnContent;
            console.log(onDecimal);
         } else if (operators && onDecimal) {
            onOperator = true;
            numTwo += btnContent;
            result.value += btnContent;
            console.log(onDecimal);
         }
      }
      ///////////////////////////////////////////////////////////////////////
      if (action === 'clear') {
         numOne = "";
         numTwo = "";
         operators = "";
         result.value = "";
         onDecimal = false;
         onOperator = false;
      }
      if (action === 'calculate') {
         result.value += calculate(numOne, operators, numTwo);
         console.log(calculate(numOne, operators, numTwo));
         numOne = "";
         numTwo = "";
         operators = "";
         onDecimal = false;
         onOperator = false;
      }
   }
}


buttons.addEventListener("click", onClickBtn);