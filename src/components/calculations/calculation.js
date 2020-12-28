class Calculate {
  constructor() {
    this.current = null;
    this.lastInput = null;
    this.lastOperator = null;
    this.lastValue = 0;
    this.number = "";
    this.numberArray = [];
    this.operatorArray = [];
    this.isCAC = false;

    this.operationObj = {
      add: "+",
      subtract: "\u2212",
      multiply: "\u00D7",
      divide: "\u00F7",
      percentage: "%",
      invertSign: "\u00B1",
      equal: "=",
      allClear: "AC",
      clear: "C",
    };
  }
  clear() {
    this.isCAC = false;
    this.number = "";
    return "0";
  }

  allClear() {
    this.current = null;
    this.lastInput = null;
    this.lastOperator = null;
    this.lastValue = null;
    this.number = "";
    this.numberArray = [];
    this.operatorArray = [];
    this.isCAC = false;
    return "0";
  }
  isNumber(input) {
    return !isNaN(input) || input === ".";
  }
  isOperator(input) {
    return Object.values(this.operationObj).includes(input);
  }
  invertSign(input) {
    return parseFloat(input) === 0 ? "0" : (parseFloat(input) * -1).toString();
  }
  percentage(input) {
    return (parseFloat(input) / 100).toString();
  }
  add(num1, num2) {
    return (parseFloat(num1) + parseFloat(num2)).toString();
  }
  substract(num1, num2) {
    return (parseFloat(num1) - parseFloat(num2)).toString();
  }
  multiply(num1, num2) {
    return (parseFloat(num1) * parseFloat(num2)).toString();
  }
  divide(num1, num2) {
    return (parseFloat(num1) / parseFloat(num2)).toString();
  }
  removeLeadingZero(input) {
    if (input.length > 1 && input[0] === "0" && input[1] !== ".") {
      return this.removeZero(input.substr(1, input.length));
    }
    return input;
  }
  alreadyContainDecimalPoint(input) {
    return input.includes(".");
  }
  handleNumberInput(input) {
    if (input === "0" && this.number === "") {
      return "0";
    }
    this.isCAC = true;

    if (input === "." && this.alreadyContainDecimalPoint(this.number)) {
      return this.number;
    }
    if (input === "." && this.number === "") {
      this.number = "0.";
      return this.number;
    }
  }

  calc(input) {
    console.log("inside calc", input);
    if (this.isNumber(input)) {
      console.log("given input is a nummber");
      return this.handleNumberInput(input);
    }
    if (this.isOperator(input)) {
      console.log("given input is a operator");
      return input === "AC" ? this.allClear() : this.clear();
    }

    return Error;
  }
}

export default Calculate;
