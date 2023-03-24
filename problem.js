// q1   1- create a function that takes two arguments, one is an array and the other is a number,
// then return the index of the given value or return -1 if the element cannot be found.
function find(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return i;
      }
    }
    return -1;
  }


  ////////////////////

  //q2
  //2- create a function that takes an array of integers between 1 and 100 except for one, and returns the missing number.
function missing (arr){
let mis=0;
for(let i=0;i<=100;i++){
if(i!==arr[i])
mis=i;
}
return mis;
}

//////////////////////////
//q3
//3- create a function that takes an array of integers and returns a new array with the same integers without the duplicates
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function Duplicates(arr)
{
    let temp = new Array(arr.length);
  
   let number
    let j = 0;
    for (let i=0; i<arr.length; i++){
        for(let j=0;j<arr.length;j++){
        if (arr[i] != arr[j])
            number=arr[i];
        }
        temp[i] = number;    
    }
  
    return temp;
}
  //q4
  //4- create a function that takes an array of integers and returns the average of all the numbers in it 

  function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
  }
  

  //q5
  //Write a function that, takes an array of integers as input, iterates over the array, and returns a new array.
 //The returned array should contain the result of raising 2 to the power of the original input element.
// way 1
function doublenamber(numbers) {
  const newarr = [];
  for (let i = 0; i < numbers.length; i++) {
    const doubled = Math.power(2, numbers[i]);
    newarr.push(doubled);
  }
  return newarr;
}
// way 2
function doublenambers(numbers) {
  const result = [];
  numbers.forEach(function(num) {
    const power = Math.pow(2, num);
    result.push(power);
  });

  return result;
}
//way 3
function doublenamberss(arrnumbers) {
  const result = arrnumbers.map(function(num) {
    return Math.pow(2, num);
  });
  return result;
}

// let arr = [1,2,3,4];
// console.log(doublenamberss(arr));
// end q5

//q6 Write a function that, takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.


function evenstringOdd(n) {
  const result = n.map(function(num) {
    if (typeof num !== "number") {
      return "N/A";
    } else if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  });
  return result;
}
const n = [1,2,3,"israa"];
console.log(evenstringOdd(n));

//q6 end



//q7
// Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
// - If a number is divisible by 3, add the word "Fizz" to the output array.
// - If the number is divisible by 5, add the word "Buzz" to the output array.
// - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
// - Otherwise, add the number to the output array.
// Return the resulting output array.


function fizzbuzz(arr) {
  let result = [];
  
  arr.forEach((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      result.push("Fizz Buzz");
    } else if (num % 3 === 0) {
      result.push("Fizz");
    } else if (num % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(num);
    }
  });
  
  return result;
}
let o=[3,5,15,15,15,1];
console.log(fizzbuzz(o));