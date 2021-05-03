const zero = document
  .querySelector(".zero-button")!
  .addEventListener("click", onZeroClick);
const one = document
  .querySelector(".one-button")!
  .addEventListener("click", onOneClick);
const two = document
  .querySelector(".two-button")!
  .addEventListener("click", onTwoClick);
const three = document
  .querySelector(".three-button")!
  .addEventListener("click", onThreeClick);
const four = document
  .querySelector(".four-button")!
  .addEventListener("click", onFourClick);
const five = document
  .querySelector(".five-button")!
  .addEventListener("click", onFiveClick);
const six = document
  .querySelector(".six-button")!
  .addEventListener("click", onSixClick);
const seven = document
  .querySelector(".seven-button")!
  .addEventListener("click", onSevenClick);
const eight = document
  .querySelector(".eight-button")!
  .addEventListener("click", onEightClick);
const nine = document
  .querySelector(".nine-button")!
  .addEventListener("click", onNineClick);
const ac = document
  .querySelector(".ac-button")!
  .addEventListener("click", onAcClick);
const percentage = document
  .querySelector(".percentage-button")!
  .addEventListener("click", onPercentageClick);
const divide = document
  .querySelector(".divide-button")!
  .addEventListener("click", onDivideClick);
const multiply = document
  .querySelector(".multiply-button")!
  .addEventListener("click", onMultiplyClick);
const subtract = document
  .querySelector(".subtract-button")!
  .addEventListener("click", onSubtractClick);
const plus = document
  .querySelector(".plus-button")!
  .addEventListener("click", onPlusClick);
const plusMinus = document
  .querySelector(".plus-minus-button")!
  .addEventListener("click", onPlusMinusClick);
const dot = document
  .querySelector(".dot-button")!
  .addEventListener("click", onDotClick);
const equals = document
  .querySelector(".equals-button")!
  .addEventListener("click", onEqualsClick);
const calcOutput = document.querySelector(".calculator__output")!;
const screenDisplay = document.querySelector(".calculator__output__number")!;

let defaultNumber = "0";
let currentNumber: string;
let firstNumber: string;
let secondNumber: string;
let symbol: string;
let resultNumber: number | string = 0;

function numberClickLogic(number: string) {
  if (defaultNumber.length === 1 && defaultNumber === "0") {
    defaultNumber = number;
    screenDisplay.innerHTML = defaultNumber;
    currentNumber = screenDisplay.innerHTML;
  } else {
    defaultNumber += number;
    screenDisplay.innerHTML = defaultNumber;
    currentNumber = screenDisplay.innerHTML;
  }
}
function onZeroClick() {
  numberClickLogic("0");
}
function onOneClick() {
  numberClickLogic("1");
}
function onTwoClick() {
  numberClickLogic("2");
}
function onThreeClick() {
  numberClickLogic("3");
}
function onFourClick() {
  numberClickLogic("4");
}
function onFiveClick() {
  numberClickLogic("5");
}
function onSixClick() {
  numberClickLogic("6");
}
function onSevenClick() {
  numberClickLogic("7");
}
function onEightClick() {
  numberClickLogic("8");
}
function onNineClick() {
  numberClickLogic("9");
}

function arithmeticClickLogic(arithmetic: string) {
  defaultNumber = "0";
  symbol = arithmetic;
  firstNumber = currentNumber;
  screenDisplay.innerHTML = defaultNumber;
}
function onPlusClick() {
  arithmeticClickLogic("+");
}
function onSubtractClick() {
  arithmeticClickLogic("-");
}
function onDivideClick() {
  arithmeticClickLogic("/");
}
function onMultiplyClick() {
  arithmeticClickLogic("*");
}

function onAcClick() {
  defaultNumber = "0";
  symbol = "";
  screenDisplay.innerHTML = defaultNumber;
  currentNumber = screenDisplay.innerHTML;
  firstNumber = screenDisplay.innerHTML;
  secondNumber = screenDisplay.innerHTML;
  resultNumber = screenDisplay.innerHTML;
}
function onPercentageClick() {
  console.log("%");
}
function onPlusMinusClick() {
  console.log("-+");
}
function onDotClick() {
  console.log(".");
}

// window.addEventListener("click", getSecondNumber);
// function getSecondNumber(e: any) {
//   if (e.target.outerText !== "=" ) {
//     secondNumber += e.target.outerText;
//   }
// }

function onEqualsClick() {
    secondNumber = screenDisplay.innerHTML;
  switch (symbol) {
    case "+":
      resultNumber = +firstNumber + +secondNumber;
      break;
    case "-":
      resultNumber = +firstNumber - +secondNumber;
      break;
    case "*":
      resultNumber = +firstNumber * +secondNumber;
      break;
    case "/":
      resultNumber = +firstNumber / +secondNumber;
      break;
    default:
      break;
  }
  screenDisplay.innerHTML = resultNumber.toString();
  currentNumber = resultNumber.toString();
  firstNumber = resultNumber.toString();
  defaultNumber = "0";

  console.log(firstNumber)
  console.log(secondNumber)
  console.log(resultNumber)
}
