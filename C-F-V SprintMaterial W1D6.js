//1
var carName="Volvo"
//2
var length = 16; ===> Intiger

var lastName = "Johnson";  ===> String

var isGreaterThan10 = length > 10 ===> Boolean
//3
///correction 
function square1(x) { 
    return x * x ; 
    } 
//4
function largest(A,B) {
    if (A>B){
        return A
    }
    else {
        return B
    }
 
}
//5
function add(number1, number2) {
    console.log(number1+number2)
    }
//6
function subtract(number1, number2) {
    console.log(number1-number2)
   }
//7
function Calcul (number1,number2,operator){
    if ((operator !== "+")&&(operator !== "-")){
        return "choose operator +/-"
    }
    if (operator === "+"){
        return add(number1,number2)
    }
    else {
        return subtract(number1,number2)
        
    }
}
//8
function divide(number1,number2) {
    console.log(number1/number2)
}
function multiply(number1,number2) {
    console.log(number1*number2)
}

   