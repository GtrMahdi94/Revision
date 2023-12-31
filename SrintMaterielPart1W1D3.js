////EX\\\\
//1
function returnTrue(){

    return true
    
  }
//2
function returnFalse( ) { 

    return false
    
  }
//3
function isEven(number) { 
    if (number%2===0){
        return true
    }
        return false
     
    }
//4
function isOdd(number) { 

    if (number%2!==0){
       return true
   }
       return false
    
   }
//5
function isGreaterThan10(number) { 

    if (number>10){
        return true
    } 
        return false
    }
//6
function isLessThan30(number) {

    if (number<30){
        return true
    } 
        return false
    }
//7
function isEqualTo10(number) {

    if (number===10){
       return true
   } 
       return false
    
   } 
//8
function isGreaterOrEqualTo15(number) {
    if (number>=15){
        return true
    } 
        return false
     
     
    }
//9
function isLessOrEqualTo8(num1) { 
 
    if (num1<=8){
        return true
    } 
        return false
      
     
    } 
///// More Practice \\\\\
//1
function isLessThan(num1, num2) {
    if (num1<num2){
        return true
    } 
        return false
      
    
    }
//2
function isEqualTo(num1, num2) { 
    if (num1===num2){
        return true
    } 
        return false
      
     
    }
//3
function isOldEnoughToDrive(age) {
    if (age>=18){
        return true
    } 
        return false
      
    
     
    } 
//4
function isValidPassword(password) {
    if (password.length>=8){
        return true
    }
        return false
     }
//5
function longerString(string1, string2) {
    if (string1.length===string2.length){
    return "both"
}
    else if (string1.length<string2.length){
    return string2    
    }
    else {
        return string1
    }
}
//6
function opposite(boolean) {
    if (boolean===true){
        return false
    }
       else {
           return true
       }
   }
///// Advanced \\\\\
//1
function rectAreaGreaterThan50(length, width) {
    if ((length*width)>=50){
         return true
     }
        else {
            return false
        }
    } 
//2
function budgetStatus(number) {  
    if (number<=250){
         return "under budget"
     }
        else {
            return "over budget"
        } 
    } 
//3
function isTriangle(side1, side2, side3) { 
    if ((side1+side2)>side3){
        return true
    }
        return false
     }
//4
function getMax(number1, number2, number3) { 
    if((number1>number2)&&(number1>number3)){
        return number1
    }
       else if((number2>number1)&&(number2>number3)){
        return number2
    }
        else {
            return number3
        }
     } 
//5
function isLeapYear(year) {
    if ((year%4===0)||(year%400===0)){
        return true
    }
      return false
  }
     

