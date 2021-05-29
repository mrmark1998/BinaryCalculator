// Mathmatical Functions

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function bin2dec(binary) {
    return parseInt(binary, 2);
}

// Global RegExpressions for functions and calculator
    let firstRe = /^\d+/gm;
    let secondRe = /\d+$/gm;
    let mathRe = /[+-\/\*]/gm;

function calculate(equation)  {
    let result = 0;
    
    let firstString = equation.match(firstRe);
    let secondString = equation.match(secondRe);
    let mathString = equation.match(mathRe);

    let num1 = bin2dec(firstString);
    let num2 = bin2dec(secondString);
    console.log(num1 + " "+ mathString + " " + num2);

    if (mathString == "+") {
        result = num1+num2;
    } else if (mathString == "-") {
        result = num1-num2;
    } else if (mathString == "*") {
        result = num1*num2;
    } else if (mathString == "/") {
        result = Math.floor(num1/num2);
    }

    console.log(result);
    
    let binaryResult = dec2bin(result);

    console.log(firstString + " " + mathString + " " + secondString + " = " + binaryResult);

    return binaryResult;
}



// Calculator Functions

function addOne() {
     document.getElementById("res").innerHTML += "1";
}

function addZero() {
     document.getElementById("res").innerHTML += "0";
}

// (Wanted to add conditions where +-*/ might be pressed in middle of op, but not necessary 

/*
var operator = 0; // 0=do nothing, 1=add, 2=subtract, 3=multiply, 4=divide
                  // this is when user pushes operator in middle of 2nd string (changes op)
                  
function add() {
    if (document.getElementById("res").innerHTML.test(mathRe))
    operator = 1;
}
function subtract() {
    operator = 2;
}
function multiply() {
    operator = 3;
}

function divide() {
    operator = 4;
} */

function addSum() {
     document.getElementById("res").innerHTML += "+";
}

function addSub() {   
     document.getElementById("res").innerHTML += "-";
}

function addMult() {
     document.getElementById("res").innerHTML += "*";
}

function addDiv() {
     document.getElementById("res").innerHTML += "/";
}

function Clear() {
    document.getElementById("res").innerHTML = "";
}

function Calc() {
    document.getElementById("res").innerHTML =      calculate(document.getElementById("res").innerHTML);
}
