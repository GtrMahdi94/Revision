///// Exercices \\\\\
//1
function sumOfN(n) {

    var x=0
    while(n>=0){
        x=x+n
        n=n-1
    }
    return x
}  
//2
function factorialOfN(n) {
    var x=1
     while(n>=1){
         x=x*n
         n=n-1
     }
     return x
 }  
//3
function repeatString(string, num) {
    var x=""
     while (num>=1){
         x=x+string
         num--
     }
     return (x)
 }  
//4
function countMinMax(min, max) {
    var i=0
      while (min<max){
          min++
          i++
      }
      return i
  }  
//5
function sumMinToMax(min, max) {
    var i=0
     while (min<max){
         i=i+min
         min++
         
     }
     return i
 }  
//6
function productMinToMax(min, max) {
    var i=1
       while (min<max){
           i=i*min
           min++
           
       }
       return i  
   }  
//7
function multiplyBy10NTimes(num, n) {
    var i=num
     while(n>0){
        i=i*10 
         n--
     }
     return i
 }
//8
function countCharAtIndex(string1, index, string2) {
    var x=string1.charAt(index)
     var i=0
     var y=0
     while (i<=string2.length){
         if (string2.charAt(i)===x){
             y++
             i++
         }
         i++
     }
     return y
 }  
//9
///// More Practice \\\\\
//1
function reverseString(string) {
    var i=string.length-1 
     var x=""
     while(i>=0){
         x=x+string[i]
         i--
     }
     return x
 }  
//2
function getIndexOf(string, char) {
    var i=0 
     while (i<=string.length){
         if (char===string[i]){
             return i
         }
         i++
     }
     return 0
     
 }    