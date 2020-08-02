/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(number) {
  if(number === 1) return 1
  return number * findFactorial(--number)
}

//Exercise 2
const reverseString = function(str) {
  if (str.length === 1) return str
  return str.charAt(str.length-1) + reverseString(str.substring(0,str.length-1))
}


//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  if(arr1.length===0)return
  arr2.push(arr1.shift())
  swap(arr1, arr2)
}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }