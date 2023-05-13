let numOne = "";
let operator = "";
let numTwo = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

// 번호클릭 function
const onClickNumber = (event) => {
   if (!operator) {
      numOne += event.target.textContent;
      $result.value += event.target.textContent;
      return;
   }
   if (!numTwo) {
      $result.value = "";
   }
   numTwo += event.target.textContent;
   $result.value += event.target.textContent;
};

const onClickDecimal = (event) => {
   if(!numOne && event.target.textContent === "."){
      return;
   } else if(numOne && event.target.textContent === "."){
      numOne += event.target.textContent;
      $result.value += event.target.textContent;
      console.log(numOne);
   }

   if(operator){
      numTwo += event.target.textContent;
   }
}
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);
document.querySelector("#decimal").addEventListener("click", onClickDecimal);

// 입력과정
const onClickOperator = (op) => () => {
   if (op === "-") {
      if (!numOne) {
      numOne += op;
      $result.value = op;
      return;
      } else if (numOne && !operator) {
      operator = op;
      $operator.value = op;
      return;
      }
      if (!numTwo) {
      $result.value = "";
      numTwo += op;
      $result.value = op;
      return;
      }
   } else {
      if (numOne) {
      operator = op;
      $operator.value = op;
      $result.value = "";
      } else {
      alert("숫자를 먼저 입력하세요.");
      }
   }
};

//  계산 코드
document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click", onClickOperator("-"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));
document.querySelector("#calculate").addEventListener("click", () => {
   if (numTwo) {
      switch (operator) {
      case "+":
         $result.value = parseInt(numOne) + parseInt(numTwo);
         break;
      case "-":
         $result.value = numOne - numTwo;
         break;
      case "*":
        $result.value = numOne * numTwo;
         break;
      case "/":
         $result.value = numOne / numTwo;
         break;
      default:
         break;
      }
      $operator.value = "";
      numOne = $result.value;
      operator = "";
      numTwo = "";
   } else {
      alert("숫자를 먼저 입력하세요.");
   }
});
document.querySelector("#clear").addEventListener("click", () => {
   numOne = "";
   operator = "";
   numTwo = "";
   $operator.value = "";
   $result.value = "";
});
