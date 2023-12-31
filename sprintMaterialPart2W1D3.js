/////Exercice\\\\\
//6
function opposite(boolean) {
    return !boolean 
 }  
//7
function greaterThan5(num1, num2) {
    if ((num1>5)||(num2>5)){
        return true
    }
     return false
 }  
//8
function allGreaterThan5(num1, num2) {
    if ((num1>5)&&(num2>5)){
        return true
    }
     return false
 }  
 //9
 function largerThan5AndLessThan20(number) {
    if ((number>5)&&(number<20)){
        return true
    }
     return false
 }  
//10
function not6AndLessThan10(number) {
    if ((number!==6)&&(number<10)){
        return true
    }
     return false
 }  
//11
function largerThan3AndLessThan18(num1, num2, num3) {
    if((num1>3)&&(num1<18)&&(num2>3)&&(num2<18)&&(num3>3)&&(num3<18)){
        return true
    }
     return false
 }  
//12
function cloudyAndRainy(string1, string2) {
    if (((string1==="cloudy")||(string1==="rainy"))&&((string2==="cloudy")||(string2==="rainy"))){
        return true
    }
     return false
 }  
//13
function weatherActivities(weather) {
    if(weather==="rainy"){
        return "hot chocolate"
    }
       else if (weather==="sunny"){
           return "running"
       }
       else if (weather==="cloudy"){
           return "sleep"
       }
       else if (weather==="hot"){
           return "swimming"
       }
      else {
          return "please choose (rainy or sunny or cloudy or hot)"
      } 
       
   } 
//14
function evenAndGreaterThan7(number) {
    if ((number>7)&&(number%2===0)){
        return true
    }
     return false
 }
 ///// More Practice \\\\\
 //1
 function areValidCredentials(name,password){
    if ((name.length>3)&&(password.length>=8)){
    return true
    }
    return false 
}
//2
function findMinLengthOfThreeWords(string1, string2, string3) {
    if ((string1.length<string2.length)&&(string1.length<string3.length)){
        return string1.length
    } 
     else if ((string2.length<string1.length)&&(string2.length<string3.length)){
        return string2.length
    } 
     else return string3.length
 }  
//3
function findMaxLengthOfThreeWords(string1, string2, string3) {
    if ((string1.length>string2.length)&&(string1.length>string3.length)){
        return string1.length
    } 
     else if ((string2.length>string1.length)&&(string2.length>string3.length)){
        return string2.length
    } 
     else return string3.length
 }  
//4
function guessMyNumber(number) {
    var x=Math.floor(Math.random() * 6)
   if (x===number){
       return "You guessed my number!"
   }
    console.log (x)
    return "Nope! That wasn’t it!"
}  
///// Advanced \\\\\
//1
function or(statement1, statement2) {
    return (statement1||statement2)
 }  
//2
function and(statement1, statement2) { 
    return (statement1&&statement2)
  }  
//3
function shirtWidth(width) {
    if ((width>=20)&&(width<30)){
        return "You should select a size S"
    }
     else if ((width>=30)&&(width<40)){
        return "You should select a size M"
    }
     else if ((width>=40)&&(width<50)){
        return "You should select a size L"
    }
     else {
         return "You should select a different shirt"
     }
 }  
//4
function player1Choice(choice) {
    if ((choice==="rock")||(choice==="paper")||(choice==="scissors")){
        return ("Player 1 chose "+choice)
    }
     return "Player 1 chose poorly"
 }  
//5
function convertScoreToGrade(score) {
    if ((score<=100)&&(score>=90)){
        return "A"
    }
     else if ((score<90)&&(score>=80)){
        return "B"
    }
     else if ((score<80)&&(score>=70)){
        return "C"
    }
     else if ((score<70)&&(score>=60)){
        return "D"
    }
     else if ((score<60)&&(score>=0)){
        return "F"
    }
     else {
         return "Invalid Score"
     }
 }       
//6
function convertScoreToGradeWithPlusAndMinus(score) {
    if ((score<=100)&&(score>=90)){
        if (score>=95){
            return "A+"
        }
        else return "A-"
    }
     else if ((score<90)&&(score>=80)){
        if (score>=86){
            return "B+"
        }
        else return "B-"
    }
     else if ((score<80)&&(score>=70)){
        if (score>=77){
            return "C+"
        }
        else return "C-"
    }
     else if ((score<70)&&(score>=60)){
        if (score>=67){
            return "D+"
        }
        else return "D-"
    }
     else if ((score<60)&&(score>=0)){
        return "F"
    }
     else {
         return "Invalid Score"
     }
 }  
//7
function isItTruthy(value) {
    if ((typeof value==="string")){
        return "Input is Truthy"
    }
     return "Input is Falsy"
 } 
 //8
 function checkArea(area) {
    if ((area>40)&&(area<100)){
        return true
    }
     return false
 } 
//9
function checkMultiply(num1, num2) {
    if (((num1*num2)>50)&&((num1*num2)<150)){
        return true
    }
     return false
 }  